import Image from 'next/image';  // Import if you haven't already
import { DiscordLogo, LooperLandsLogo, TwitterLogo, LoopExchangeLogo } from "./image";

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white p-6 md:p-6">
            <div className="flex flex-col md:flex-row justify-between items-center">

                <div className=" md:mb-0 md:text-left sm:text-center">
                    <h2 className="text-lg font-semibold">Stay Connected</h2>
                    <div className='columns-2'>
                        <a href="https://twitter.com/CobsFarm" target="_blank" rel="noreferrer">
                            <TwitterLogo />
                        </a>
                        <a href="https://discord.gg/BAGXJZVH4Y" target="_blank" rel="noreferrer">
                            <DiscordLogo />
                        </a>
                    </div>
                </div>
                <div className=" md:mb-0 md:text-left sm:text-center">
                    <h2 className="text-lg font-semibold">Marketplace</h2>
                    <div className="flex justify-center items-center">
                        <a href="https://loopexchange.art/collection/cobsfarm" target="_blank" rel="noreferrer">
                            <LoopExchangeLogo />
                        </a>
                    </div>
                </div>
                <div className=" md:mb-0 md:text-left sm:text-center">
                    <h2 className="text-lg font-semibold">Hosted On</h2>
                    <div className="flex justify-center items-center">                        {/* <a href="https://twitter.com/CobsFarm" target="_blank" rel="noreferrer">
                            <Loopring />
                        </a> */}
                        <a href="https://loopworms.io/DEV/LooperLands/LooperLandsGuide/">
                            <LooperLandsLogo />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
