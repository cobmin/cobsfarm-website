import React, { useState } from 'react';
import { GlobeAltIcon, AdjustmentsHorizontalIcon, UsersIcon, StarIcon, PuzzlePieceIcon, CheckBadgeIcon } from '@heroicons/react/20/solid'
import { CobsEntrance, DisplayAlphaLoopers, FlowerPic } from './image';
import Image from 'next/image'
import Link from 'next/link';


const Gameplay = [
    {
        name: 'Two Worlds in One: ',
        description:
            'Experience the tranquility of vibrant farms and intense action in perilous dungeons.',
        icon: GlobeAltIcon,
    },
    {
        name: 'Diverse Activities: ',
        description: 'From farming to fishing and owning shops, Cob\'s Farm offers a variety of enriching experiences.',
        icon: AdjustmentsHorizontalIcon,
    },
    {
        name: 'Community Interaction: ',
        description: 'Engage with animated farm animals and interact with other players.',
        icon: UsersIcon,
    },
]
const Story = [
    {
        name: 'Alpha Origin Airdrop: ',
        description:
            'Step into the next phase with Mystic Maize Vault and randomized CobLooper characters.',
        icon: StarIcon,
    },
    {
        name: 'Spectrum of Traits: ',
        description: 'Characters and weapons come with a range of traits, adding an element of thrill and unpredictability.',
        icon: PuzzlePieceIcon,
    },
    {
        name: 'Exclusive Ownership: ',
        description: 'Limited Mystic Maize Vaults make you eligible for unique CobLooper characters and weapons.',
        icon: CheckBadgeIcon,
    },
]

export default function Features() {
    const [selectedTab, setSelectedTab] = useState('gameplay'); // State for tab selection

    return (
        <div className="overflow-hidden py-24 sm:py-32 text-gray-300">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    {/* Image moved to first column and adjusted styles */}
                    <div className="flex justify-center items-center">
                        {selectedTab === 'gameplay' ? <CobsEntrance /> : <DisplayAlphaLoopers />}
                    </div>


                    {/* Text moved to second column */}
                    <div className="lg:pl-8 lg:pt-4">
                        {/* Tab selection */}
                        <div className="text-center">
                            <button
                                className={`inline-block mr-4 text-xl font-semibold p-2 relative ${selectedTab === 'gameplay' ? 'custom-underline' : ''}`}
                                onClick={() => setSelectedTab('gameplay')}
                            >
                                Gameplay
                            </button>
                            <button
                                className={`inline-block text-xl font-semibold p-2 relative ${selectedTab === 'story' ? 'custom-underline' : ''}`}
                                onClick={() => setSelectedTab('story')}
                            >
                                Features
                            </button>
                        </div>

                        {/* Conditional rendering */}
                        {selectedTab === 'gameplay' ? (
                            <>
                                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 lg:max-w-none">
                                    {Gameplay.map((Gameplay) => (
                                        <div key={Gameplay.name} className="relative pl-9">
                                            <dt className="inline font-semibold text-[#718f3f]">
                                                <Gameplay.icon className="absolute left-1 top-1 h-5 w-5" aria-hidden="true" />
                                                {Gameplay.name}
                                            </dt>
                                            <dd className="inline">{Gameplay.description}</dd>
                                        </div>
                                    ))}
                                </dl>
                            </>
                        ) : (
                            <>
                                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 lg:max-w-none">
                                    {Story.map((Story) => (
                                        <div key={Story.name} className="relative pl-9">
                                            <dt className="inline font-semibold text-[#718f3f]">
                                                <Story.icon className="absolute left-1 top-1 h-5 w-5" aria-hidden="true" />
                                                {Story.name}
                                            </dt>
                                            <dd className="inline">{Story.description}</dd>
                                        </div>
                                    ))}
                                </dl>
                            </>
                        )}


                    </div>
                </div>
            </div>
        </div>
    );
}
export function FeatureTwo() {
    return (
        <div className="py-24 bg-[#718f3f] text-gray-300">
            <div className="mx-auto max-w-7xl px-6 lg:px-6">
                <div className="flex flex-col md:flex-row gap-x-8 gap-y-8">
                    {/* Right Column, moved to top in mobile view */}
                    <div className="flex justify-center items-center order-1 md:order-2">
                        <FlowerPic />
                    </div>

                    {/* Left Column */}
                    <div className="text-center md:text-left space-y-4 order-2 md:order-1">
                        <h2 className="text-4xl font-semibold">Alpha Fields is Now Live</h2>
                        <p>Alpha Fields is the first stage of our unfolding adventure. This foundational stage serves as a proving ground where we fine-tune gameplay dynamics, implement player feedback, and roll out new features. If you&apos;re looking forward to farming, fishing, owning shops, and having your own house, know that these enriching experiences are on our roadmap.</p>
                        <div className="mt-10 flex items-center justify-center md:justify-start gap-x-6">
                            <a
                                href="https://www.cobmin.com/posts/Discover-Cobs-Farm"
                                className="rounded-md px-6 py-2 text-lg font-semibold text-white shadow-lg bg-[#1f2937] hover:bg-[#2d3b4f]"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export function NewsSection() {
    const newsPosts = [
        { source: "https://www.cobmin.com/posts/Introducing-Alpha-Fields", image: "/Farm.png", title: "Introducing Alpha Fields: A Deeper Dive into Cob's Farm", date: "September 25, 2023" },
        { source: "https://x.com/CobsFarm/status/1703554856034717885?s=20", image: "/LoopExchangeSellOut.png", title: "Great Start to a Fun Journey: Alpha Drop Sells Out", date: "September 17, 2023" },
        { source: "https://www.cobmin.com/posts/Discover-Cobs-Farm", image: "/Entrance.jpeg", title: "Discover Cob's Farm: The Alpha Origin Airdrop and Your Next Adventure Awaits", date: "September 9, 2023" },
        { source: "https://loopexchange.art/collection/cobsfarm", image: "/LoopExchangeCollection.png", title: "Cob's Farm on LoopExchange!", date: "September 1, 2023" },
    ];
    return (
        <div className="py-24 text-gray-300">
            <div className="mx-auto max-w-7xl px-6 lg:px-6 text-center mb-8">
                <h2 className="text-4xl font-semibold">NEWS</h2>
            </div>
            <div className="mx-auto max-w-7xl px-6 lg:px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {newsPosts.map((post, index) => (
                    <Link key={index} href={`${post.source}`}>
                        <div role="link" tabIndex={0} className="bg-gray-800 rounded-lg p-4 flex flex-col h-full">
                            <div className="relative h-40">
                                <Image src={post.image} className='rounded object-cover absolute inset-0' layout="fill" alt="Entrance" />
                            </div>
                            <div className="pt-4 flex flex-col justify-between flex-grow">
                                <div className="flex-grow">
                                    <h3 className="text-lg font-semibold pb-2 line-clamp-3">{post.title}</h3>
                                </div>
                                <p className="text-sm">{post.date}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
            {/* <div className="mt-10 flex justify-center">
                <a href="#" className="rounded-md px-6 py-2 text-lg font-semibold text-white shadow-lg bg-[#718f3f] hover:bg-[#85a24a]">
                    View All
                </a>
            </div> */}
        </div>
    );
}

export function FeatureThree() {
    const features = [
        {
            image: '/AlphaLoopersDisplay.png',
            title: 'Random Characters',
            description: 'Discover a diverse cast of characters each time you play, offering unique traits to shape your adventure.'
        },
        {
            image: '/QuestGhost.png',
            title: 'Questing',
            description: 'Embark on quests that take you through intense battles and cunning challenges. Every choice you make adds a unique twist to your story.'
        },
        {
            image: '/RelaxingPond.png',
            title: 'Relaxing',
            description: 'Unwind in scenic retreats within Cob\'s Farm. These tranquil pockets offer a change of pace and opportunities to strategize.'
        },
        {
            image: '/Gathering.png',
            title: 'Gathering',
            description: 'Coming soon: Immerse yourself in the resource-rich world of Cob\'s Farm. Gather items to enhance your capabilities or trade in the marketplace.'
        }
    ];

    return (
        <div className="py-24 bg-[#718f3f] text-gray-300 text-center text-gray-300">
            <div className="mx-auto max-w-7xl px-6">
                <p className="text-lg">Play How You Want</p>
                <h2 className="text-4xl font-semibold my-4">Make Cob&apos;s Farm your Own</h2>
                <p className="text-lg mb-12">Shape your own adventure on Cob&apos;s Farm. From clashing swords with lurking foes, unwinding in picturesque retreats, to the upcoming feature of item gathering, every choice enhances your personal journey.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-gray-800 rounded-lg p-4 flex flex-col">
                            <div className="relative h-48">
                                <Image src={feature.image} layout="fill" objectFit="cover" className="absolute rounded-t-lg" alt={feature.title} />
                            </div>
                            <div className="pt-4">
                                <h3 className="text-lg font-semibold pb-2">{feature.title}</h3>
                                <p className="text-sm">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
type Feature = {
    image: string;
    emoji: string;
    title: string;
    description: string;
};

type FeatureButtonProps = {
    feature: Feature;
    index: number;
    activeFeature: number;
    setActiveFeature: (index: number) => void;
};
const FeatureButton: React.FC<FeatureButtonProps> = ({ feature, index, activeFeature, setActiveFeature }) => (
    <div className="flex flex-col items-center">
        <button
            className={`w-12 h-12 sm:w-16 sm:h-16 mx-0 sm:mx-6 mb-4 rounded-full border-2 flex justify-center items-center text-2x1 sm:text-3xl ${activeFeature === index ? 'border-[#718f3f]' : ''}`}
            onClick={() => setActiveFeature(index)}
        >
            {feature.emoji}
        </button>
        <span className={`text-sm hidden md:inline-block ${activeFeature === index ? 'text-[#718f3f]' : ''}`}>{feature.title}</span>
    </div>
);
const SmallFeatureButton: React.FC<FeatureButtonProps> = ({ feature, index, activeFeature, setActiveFeature }) => (
    <div className="flex flex-col items-center">
        <button
            className={`w-6 h-1 sm:w-12 sm:h-2 mx-0 sm:mx-3 mb-2 rounded-full border-2 flex justify-center items-center ${activeFeature === index ? 'border-[#718f3f]' : ''}`}
            onClick={() => setActiveFeature(index)}
        >
            {/* Intentionally left blank for minimal design */}
        </button>
    </div>
);
export function FeatureFour() {
    const [activeFeature, setActiveFeature] = useState(0);

    const features = [
        { image: '/WorldBoss.png', emoji: "👹", title: 'World Bosses', description: 'Engage in epic battles with formidable World Bosses. Gather your friends and test your skills against these colossal foes.' },
        { image: '/ComingSoon.png', emoji: "🚪", title: 'Dungeons', description: 'Delve deep into mysterious dungeons filled with unique loot, puzzles, and enemies waiting in the dark.' },
        { image: '/ComingSoon.png', emoji: "⚔️", title: 'PvP', description: 'Challenge other players in thrilling PvP combat. Prove your mettle and climb the leaderboards.' },
        { image: '/ComingSoon.png', emoji: "🏡", title: 'Ownership', description: 'Claim and customize your own piece of Cob\'s Farm. Show off your style and achievements.' },
        { image: '/ComingSoon.png', emoji: "👥", title: 'Community Events', description: 'Participate in special events to win exclusive rewards and strengthen your community ties.' }
    ];

    return (
        <div className="py-24 text-center text-gray-300">
            <div className="mx-auto max-w-7xl px-6">
                <h2 className="text-4xl mb-4 font-semibold max-w-lg mx-auto">Open World</h2>
                <p className="text-lg mb-12 max-w-lg mx-auto">Explore the expansive realm of Cob&apos;s Farm as you carve your own path. Team up with other adventurers, tackle menacing foes, unearth hidden secrets, and find tranquility in secluded spots.</p>
                <div className="flex justify-center space-x-4 mb-6">
                    {features.map((feature, index) => (
                        <FeatureButton
                            key={index}
                            feature={feature}
                            index={index}
                            activeFeature={activeFeature}
                            setActiveFeature={setActiveFeature}
                        />
                    ))}
                </div>

                <div className="flex flex-col items-center mb-4">
                    <div className="flex flex-col items-center mb-4">
                        <Image
                            src={features[activeFeature].image}
                            alt={features[activeFeature].title}
                            width={800}
                            height={500}
                            className="mx-auto mb-4 object-cover rounded"
                        />
                        <div className="text-center" style={{ maxWidth: '600px' }}>
                            <h3 className="text-lg font-semibold">{features[activeFeature].title}</h3>
                            <p>{features[activeFeature].description}</p>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center space-x-4 mb-6">
                    {features.map((feature, index) => (
                        <SmallFeatureButton
                            key={index}
                            feature={feature}
                            index={index}
                            activeFeature={activeFeature}
                            setActiveFeature={setActiveFeature}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}