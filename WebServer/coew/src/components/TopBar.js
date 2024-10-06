"use client";
import Image from 'next/image';
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'

const TopBar = () => {
    return (
        <div className="fixed top-0 w-screen bg-gray-900 left-0 flex flex-row p-2">
            <div>
                <a href="http://costionline.com" className="decoration-0 flex flex-row items-center" role="button">
                    <Image src="/icons/Logo.svg" alt="logo" className="aspect-square p-1 transition-transform duration-200 ease-in-out transform hover:scale-90" width={45} height={45}/>
                    <p className="text-xl font-bold ml-1">EventStar</p>
                </a>
            </div>

        </div>
    );
}

export default TopBar;