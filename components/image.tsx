import Image from 'next/image'
import Farm from '../public/Farm.png'
import CobsLogo from '../public/logo.png'
import Entrance from '../public/Entrance.jpeg'
import LooperLands from '../public/ll-logo.png'
import DisplayLoopers from '../public/AlphaLoopersDisplay.png'
import TwitterLogos from '../public/twitter.svg'
import DiscordLogos from '../public/discord.svg'

export function FarmBackground() {
    return (
        <Image src={Farm} alt="Picture of the author" layout='fill' objectFit='cover' />
    )
}

export function CobsFarmLogo() {
    return (
        <Image src={CobsLogo} alt="Cob's Farm Logo" />
    )
}

export function CobsEntrance() {
    return (
        <Image src={Entrance} objectFit="contain" className="h-full w-auto rounded" alt="Cob's Farm Entrance" />
    )
}

export function LooperLandsLogo() {
    return (
        <Image src={LooperLands} className='rounded w-32 h-32' alt="Looper Lands Logo" />
    )
}
export function DisplayAlphaLoopers() {
    return (
        <Image src={DisplayLoopers} objectFit="contain" className="h-full w-auto rounded" alt="Looper Lands Logo" />
    )
}

export function TwitterLogo() {
    return (
        <Image src={TwitterLogos} objectFit="contain" className=" w-12 h-12" alt="Looper Lands Logo" />
    )
}
export function DiscordLogo() {
    return (
        <Image src={DiscordLogos} objectFit="contain" className=" w-12 h-12" alt="Looper Lands Logo" />
    )
}