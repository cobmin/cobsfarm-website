import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import { FarmBackground, CobsFarmLogo, WindMillBackground } from './image';
import { DevicePhoneMobileIcon, ComputerDesktopIcon } from '@heroicons/react/20/solid'

const quotes = [
    "A weekend getaway in a game!",
    "Engaged yet relaxed—pure fun.",
    "Cob's Farm is an experience.",
    "Surprises around every corner!"
];

export default function Hero() {
    const [quoteIndex, setQuoteIndex] = useState(0); // For keeping track of the current quote

    useEffect(() => {
        const timer = setInterval(() => {
            setQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="bg-black relative min-h-screen flex items-center justify-center">
            <div className="absolute inset-0 z-0">
                <FarmBackground />
            </div>
            <div className="absolute inset-0 bg-black opacity-30 z-1"></div>
            <div className="relative isolate px-6 pt-14 lg:px-8 z-10 w-full flex justify-center">

                <div className="mx-auto max-w-2xl text-center">
                    <div className="mb-8 flex justify-center">
                        <CobsFarmLogo />
                    </div>
                    <h1 className="text-5xl font-extrabold tracking-tight text-gray-200 sm:text-7xl">
                        Welcome to Cob&apos;s Farm
                    </h1>
                    <p className="mt-6 text-xl font-semibold leading-8 text-gray-300">
                        Relaxing Action RPG
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <a
                            href="https://web.looperlands.io/"
                            className="rounded-md px-8 py-4 text-lg font-semibold text-white shadow-lg bg-[#718f3f] hover:bg-[#85a24a]"
                        >
                            Get started
                        </a>
                    </div>

                    <div className="mt-10 flex justify-center space-x-4">
                        <ComputerDesktopIcon className="h-10 w-10 text-gray-200" aria-hidden="true" />
                        <DevicePhoneMobileIcon className="h-10 w-10 text-gray-200" aria-hidden="true" />
                    </div>
                    <div className="mt-24 h-[8rem] overflow-hidden">
                        <p className="text-2xl font-extrabold text-gray-200">
                            {quotes[quoteIndex]}
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export function HeroTwo() {
    const [quoteIndex, setQuoteIndex] = useState(0); // For keeping track of the current quote

    useEffect(() => {
        const timer = setInterval(() => {
            setQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="bg-black relative">
            <div className="absolute inset-0 z-0">
                <WindMillBackground />
            </div>
            <div className="absolute inset-0 bg-black opacity-30 z-1"></div>
            <div className="relative isolate px-6 pt-14 lg:px-8 z-10">

                <div className="mx-auto max-w-2xl py-32">
                    <div className="text-center">
                        <div className="text-center h-[8rem] overflow-hidden">
                            <p className="mt-10 text-2xl font-extrabold text-gray-200">
                                {quotes[quoteIndex]}
                            </p>
                        </div>

                        <p className="mt-6 text-xl font-semibold leading-8 text-gray-300">
                            Get Started Today
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <a
                                href="https://web.looperlands.io/"
                                className="rounded-md px-6 py-2 text-lg font-semibold text-white shadow-lg bg-[#1f2937] hover:bg-[#2d3b4f]"
                            >
                                Play Now
                            </a>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}
