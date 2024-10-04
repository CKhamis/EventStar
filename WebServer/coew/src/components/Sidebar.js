"use client";
import Image from 'next/image';
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'

const Sidebar = () => {
    return (
        <div className="fixed top-0 w-16 h-screen bg-gray-900 left-0 flex flex-col">
            <ul className="flex-grow">
                <li className="mb-4" data-tooltip-id="my-tooltip" data-tooltip-content="Home" data-tooltip-place="right">
                    <a href="http://costionline.com" className="decoration-0" role="button">
                        <Image src="/icons/Logo.svg" alt="logo" className="aspect-square p-2.5" width={100}
                               height={100}/>
                    </a>
                    <Tooltip id="my-tooltip" />
                </li>

                <SideBarIcon iconSrc="/icons/Logo.svg" text="rat" url="/" />
                <SideBarIcon iconSrc="/icons/Logo.svg" text="rat" url="/" />

            </ul>
            <div className="bottom-0">
                <Image src="/icons/Logo.svg" alt="logo" className="aspect-square p-2.5" width={100}
                       height={100}/>
            </div>
        </div>
    );
}

const SideBarIcon = ({iconSrc, url, text}) => (
    <li className="border-b border-gray-600 group" data-tooltip-id="my-tooltip" data-tooltip-content={text} data-tooltip-place="right">
        <a href={url} className="decoration-0" role="button">
            <Image src={iconSrc} alt="logo" className="aspect-square p-2.5" width={100}
                   height={100}/>
        </a>
        <Tooltip id="my-tooltip" />
    </li>
);


export default Sidebar;