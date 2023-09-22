import React, { useState } from 'react';
import { GlobeAltIcon, AdjustmentsHorizontalIcon, UsersIcon, StarIcon, PuzzlePieceIcon, CheckBadgeIcon } from '@heroicons/react/20/solid'
import { CobsEntrance, DisplayAlphaLoopers } from './image';

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
        <div id="overview" className="overflow-hidden py-24 sm:py-32 text-gray-300">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    {/* Image moved to first column and adjusted styles */}
                    <div className="lg:-mr-8 h-[300px] w-auto">
                        {selectedTab === 'gameplay' ? <CobsEntrance /> : <DisplayAlphaLoopers />}
                    </div>


                    {/* Text moved to second column */}
                    <div className="lg:pl-8 lg:pt-4">
                        {/* Tab selection */}
                        <button
                            className={`mr-4 text-xl font-semibold p-2 relative ${selectedTab === 'gameplay' ? 'custom-underline' : ''}`}
                            onClick={() => setSelectedTab('gameplay')}
                        >
                            Gameplay Dynamics
                        </button>
                        <button
                            className={`text-xl font-semibold p-2 relative ${selectedTab === 'story' ? 'custom-underline' : ''}`}
                            onClick={() => setSelectedTab('story')}
                        >
                            Features & Updates
                        </button>

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