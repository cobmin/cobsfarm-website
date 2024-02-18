import React from 'react';

type PlayerCardProps = {
    walletAddress: string;
    nft: string;
    experience: number;
    position: number;
    rank?: string;
    imageUrl?: string; // Add this line
};

const PlayerCard: React.FC<PlayerCardProps> = ({
    walletAddress,
    nft,
    experience,
    position,
    rank,
    imageUrl,
}) => {
    const bgColor = rank === 'gold' ? 'bg-yellow-300'
        : rank === 'silver' ? 'bg-gray-300'
            : rank === 'bronze' ? 'bg-orange-300'
                : 'bg-white';

    return (
        <div className={`max-w-sm rounded overflow-hidden shadow-lg m-4 ${bgColor}`}>
            <div className="px-6 py-4 text-center">
                <div className="font-bold text-xl mb-2">#{position}</div>

                {imageUrl ? (
                    <img
                        src={imageUrl}
                        alt="NFT"
                        className="w-24 h-24 rounded-full mx-auto"
                    />
                ) : (
                    <div className="w-24 h-24 rounded-full mx-auto bg-gray-200 flex items-center justify-center">
                        <span role="img" aria-label="Placeholder">🖼️</span> {/* Placeholder emoji */}
                    </div>
                )}

                <p className="mt-2">Wallet: {walletAddress}</p>
                <p>NFT: {nft}</p>
                <p>Experience: {experience}</p>
            </div>
        </div>
    );
};

export default PlayerCard;

const formatWalletAddress = (address: string) => {
    return `${address.substring(0, 4)}....${address.substring(address.length - 4)}`;
};