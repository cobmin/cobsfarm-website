import React, { useState, useRef, useCallback } from 'react';
import { useDrop, useDrag, useDragLayer } from 'react-dnd';
import ImageItem from '../components/ImageItem';
import html2canvas from 'html2canvas';

interface Item {
    imageSrc: string;
}
const CustomDragLayer: React.FC = () => {
    const { item, itemType, isDragging, currentOffset } = useDragLayer(monitor => ({
        item: monitor.getItem(),
        itemType: monitor.getItemType(),
        isDragging: monitor.isDragging(),
        currentOffset: monitor.getSourceClientOffset()
    }));

    if (!isDragging || itemType !== 'ITEM') return null;

    const { x, y } = currentOffset || { x: 0, y: 0 };

    return (
        <div style={{ position: 'fixed', pointerEvents: 'none', zIndex: 100, left: 0, top: 0 }}>
            <div style={{ transform: `translate(${x}px, ${y}px)` }}>
                <img src={item.imageSrc} style={{ width: `${item.width}px`, height: `${item.height}px` }} />
            </div>
        </div>
    );
};


const Room: React.FC = () => {
    const [items, setItems] = useState<{ imageSrc: string; x: number; y: number; width: number; height: number; id: number }[]>([]);
    const [roomSize, setRoomSize] = useState<{ width: number; height: number }>({ width: 0, height: 0 });
    const [uploadedAssets, setUploadedAssets] = useState<any[]>([]);
    const [roomImage, setRoomImage] = useState<string>("");
    const roomRef = useRef<HTMLDivElement | null>(null);

    const removeItem = (id: number) => {
        setItems(prevItems => prevItems.filter(item => item.id !== id));
    };

    const moveItem = useCallback(
        (id: number, x: number, y: number) => {
            setItems((prevItems) =>
                prevItems.map((item) => (item.id === id ? { ...item, x, y } : item))
            );
        },
        []
    );

    const [, ref] = useDrop({
        accept: ['IMAGE', 'ITEM'],
        drop: (item: any, monitor) => {
            const offset = monitor.getClientOffset();
            const roomElement = roomRef.current;
            if (offset && roomElement) {
                const roomRect = roomElement.getBoundingClientRect();
                const x = offset.x - roomRect.left - (item.initialGrabOffset ? item.initialGrabOffset.x : 0);
                const y = offset.y - roomRect.top - (item.initialGrabOffset ? item.initialGrabOffset.y : 0);

                if (monitor.getItemType() === 'IMAGE') {
                    const newAsset = { ...item, x, y, id: new Date().getTime() };
                    setItems(prevItems => [...prevItems, newAsset]);
                } else if (monitor.getItemType() === 'ITEM') {
                    moveItem(item.id, x, y);
                }
            }
        },
    });

    const setRefs = (el: HTMLDivElement) => {
        ref(el);
        roomRef.current = el;
    };

    const handleAssetUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files) {
            const fileArray = Array.from(files).map(file => {
                const url = URL.createObjectURL(file);
                const img = new Image();
                img.src = url;
                return { url, img };
            });

            Promise.all(fileArray.map(({ img }) => new Promise(resolve => img.onload = resolve))).then(() => {
                const newAssets = fileArray.map(({ url, img }) => ({
                    url,
                    width: img.naturalWidth,
                    height: img.naturalHeight
                }));
                setUploadedAssets(prev => [...prev, ...newAssets]);
            });
        }
    };

    const handleRoomUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const fileUrl = URL.createObjectURL(file);
            const img = new Image();
            img.src = fileUrl;
            img.onload = () => {
                setRoomSize({ width: img.naturalWidth, height: img.naturalHeight });
                setRoomImage(fileUrl);
            };
        }
    };

    const saveAsPNG = async () => {
        if (roomRef.current) {
            const canvas = await html2canvas(roomRef.current);
            const imgData = canvas.toDataURL('image/png');
            const link = document.createElement('a');
            link.href = imgData;
            link.download = 'room_design.png';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    };
    const DraggableItem: React.FC<{ item: any }> = ({ item }) => {
        const handleDoubleClick = () => {
            removeItem(item.id);
        };
        const [initialGrabOffset, setInitialGrabOffset] = useState<{ x: number; y: number } | null>(null);
        const [, drag, preview] = useDrag({
            type: 'ITEM',
            item: { id: item.id, initialGrabOffset },
            collect: (monitor) => ({
                isDragging: monitor.isDragging(),
            }),
        });

        const handleMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
            const rect = (e.target as HTMLDivElement).getBoundingClientRect();
            setInitialGrabOffset({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            });
        };
        return (
            <div
                ref={drag}
                style={{ position: 'absolute', left: item.x, top: item.y }}
                onMouseDown={handleMouseDown}
                onDoubleClick={handleDoubleClick} // Adding double-click event
            >
                <img
                    src={item.imageSrc}
                    style={{
                        width: `${item.width}px`,
                        height: `${item.height}px`
                    }}
                />
            </div>
        );
    };

    return (
        <div className="flex flex-col lg:flex-row">
            <CustomDragLayer />
            <div className="w-full lg:w-1/4 p-4 bg-gray-200 rounded-l-lg">
                <label className="block text-sm font-medium mb-2">Upload Assets</label>
                <input type="file" multiple onChange={handleAssetUpload} className="mb-4" />
                {uploadedAssets.map((asset, index) => (
                    <ImageItem key={index} imageSrc={asset.url} />
                ))}
            </div>
            <div className="flex flex-col w-full lg:w-3/4 p-4 bg-gray-100 rounded-r-lg">
                <label className="block text-sm font-medium mb-2">Upload Room Background</label>
                <input type="file" onChange={handleRoomUpload} className="mb-4" />
                <div
                    ref={setRefs}
                    className="room-container relative flex-grow"
                    style={{
                        width: `${roomSize.width}px`,
                        height: `${roomSize.height}px`,
                        backgroundImage: `url(${roomImage})`,
                        backgroundSize: 'cover'
                    }}
                >
                    {items.map((item, i) => (
                        <DraggableItem key={item.id} item={item} />
                    ))}
                </div>
                <button onClick={saveAsPNG} className="rounded-md mt-4 p-2 font-semibold text-white shadow-lg bg-[#718f3f] hover:bg-[#85a24a] self-end">
                    Save Room
                </button>
            </div>
        </div>
    );
};
export default Room;