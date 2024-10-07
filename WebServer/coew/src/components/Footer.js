"use client";
import 'react-tooltip/dist/react-tooltip.css'
import Image from "next/image";

const Sidebar = () => {
    return (
        <footer className="w-full" style={{backgroundImage: `url('/tiles/ES & Logo Dark.svg')`, backgroundSize: '120px'}}>
            <div className="container grid grid-cols-5 grid-flow-col gap-4 py-10">
                <div>
                    <Image src={`/icons/Constantine Logo.svg`} alt={`Constantine Logo`} width={40} height={40}
                           className="mb-4"/>
                    <p>Constantine EventStar is developed by Constantine Khamis. Linux support by Cory Robertson</p>
                </div>
                <div></div>
                <div>
                    <p className="text-lg font-bold">You</p>
                    <ul>
                        <li className="mt-4"><a className="hover-underline" href="">Event Schedule</a></li>
                        <li className="mt-4"><a className="hover-underline" href="">Upcoming Events</a></li>
                        <li className="mt-4"><a className="hover-underline" href="">Costifications(TM)</a></li>
                    </ul>
                </div>
                <div>
                    <p className="text-lg font-bold">Community</p>
                    <ul>
                        <li className="mt-4"><a className="hover-underline" href="">Group View</a></li>
                        <li className="mt-4"><a className="hover-underline" href="">Restaurant Ratings</a></li>
                    </ul>
                </div>
                <div>
                    <p className="text-lg font-bold">Costi Online</p>
                    <ul>
                        <li className="mt-4"><a className="hover-underline" href="https://costionline.com/">Home</a></li>
                        <li className="mt-4"><a className="hover-underline" href="https://costionline.com/Projects">Projects</a></li>
                        <li className="mt-4"><a className="hover-underline" href="https://costionline.com/Wiki">Wiki</a></li>
                        <li className="mt-4"><a className="hover-underline" href="https://costionline.com/Newsroom">Newsroom</a></li>
                        <li className="mt-4"><a className="hover-underline" href="https://costionline.com/Minecraft">Minecraft</a></li>
                    </ul>
                </div>
            </div>

        </footer>
    );
}

export default Sidebar;