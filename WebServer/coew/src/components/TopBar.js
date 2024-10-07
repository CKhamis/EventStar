"use client";
import Image from 'next/image';
import 'react-tooltip/dist/react-tooltip.css'
import React from 'react';

const TopBar = () => {
    const [expanded, setExpanded] = React.useState(false);
    return (
        <div className="fixed top-0 w-screen bg-gray-900 left-0 flex flex-row z-50 justify-between">
            <a href="http://costionline.com" className="decoration-0 flex flex-row items-center mr-4 p-2" role="button">
                <Image src="/icons/Logo.svg" alt="logo" className="aspect-square p-1 transition-transform duration-200 ease-in-out transform hover:scale-90" width={45} height={45}/>
                <p className="text-xl font-bold ml-1">EventStar</p>
            </a>

            <div className={`md:static absolute w-full flex-items-center bg-gray-900 ${expanded? 'top-[100%] opacity-100' : 'top-[-50vh] opacity-0 md:opacity-100'} md:min-h-fit md:ml-10 transition-all duration-700 ease-in-out`}>
                <ul className="flex md:flex-row flex-col items-center md:gap-8 gap-12 h-full pb-10 pt-5 md:p-0">
                    <li className="text-lg md:text-base"><a href="" className="hover-underline">Text</a></li>
                    <li className="text-lg md:text-base"><a href="" className="hover-underline">Text</a></li>
                    <li className="text-lg md:text-base"><a href="" className="hover-underline">Text</a></li>
                </ul>
            </div>

            <div className="flex items-center gap-6 p-2" onClick={() => setExpanded(!expanded)}>
                <Image src="/icons/Logo.svg" alt="logo" className="aspect-square p-2 transition-transform duration-200 ease-in-out transform hover:scale-90 md:hidden" width={45} height={45}/>
            </div>
        </div>
    );
}

export default TopBar;