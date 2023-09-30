import { useDrag } from 'react-dnd';

interface ImageItemProps {
    imageSrc: string;
}

const ImageItem: React.FC<ImageItemProps> = ({ imageSrc }) => {
    const [, ref] = useDrag(() => ({ type: 'IMAGE', item: { imageSrc } }));
    return (
        <img ref={ref} src={imageSrc} draggable />
    );
};

export default ImageItem;
