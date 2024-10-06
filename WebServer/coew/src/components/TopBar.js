"use client";
import Image from 'next/image';
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'

const TopBar = () => {
    return (
        <div className="fixed top-0 w-screen bg-gray-900 left-0 flex flex-row p-2 z-50">
            <a href="http://costionline.com" className="decoration-0 flex flex-row items-center mr-4" role="button">
                <Image src="/icons/Logo.svg" alt="logo" className="aspect-square p-1 transition-transform duration-200 ease-in-out transform hover:scale-90" width={45} height={45}/>
                <p className="text-xl font-bold ml-1">EventStar</p>
            </a>

            <ul className="flex flex-row items-center">
                <li className="p-2 ml-5"><a href="" className="hover-underline">Text</a></li>
                <li className="p-2 ml-5"><a href="" className="hover-underline">Text</a></li>
                <li className="p-2 ml-5"><a href="" className="hover-underline">Text</a></li>
            </ul>

        </div>
    );
}

export default TopBar;