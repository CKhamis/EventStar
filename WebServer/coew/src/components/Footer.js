"use client";
import Image from "next/image";

const Sidebar = () => {
    return (
        <footer className="w-full border-t bg-background" style={{backgroundImage: `url('/tiles/ES & Logo Dark.svg')`, backgroundSize: '120px'}}>
            <div className="container grid lg:grid-cols-5 md:grid-cols-2 md:grid-flow-col gap-4 py-10 px-3">
                <div className="mt-4">
                    <Image src={`/icons/Constantine Logo.svg`} alt={`Constantine Logo`} width={40} height={40}
                           className="mb-4"/>
                    <p>Constantine EventStar is developed by Constantine Khamis. Linux support by Cory Robertson</p>
                </div>
                <div></div>
                <div className="mt-4">
                    <p className="text-lg font-bold">You</p>
                    <ul>
                        <li className="mt-4"><a className="hover-underline" href="">Event Schedule</a></li>
                        <li className="mt-4"><a className="hover-underline" href="">Upcoming Events</a></li>
                        <li className="mt-4"><a className="hover-underline" href="">Costifications(TM)</a></li>
                    </ul>
                </div>
                <div className="mt-4">
                    <p className="text-lg font-bold">Community</p>
                    <ul>
                        <li className="mt-4"><a className="hover-underline" href="">Group View</a></li>
                        <li className="mt-4"><a className="hover-underline" href="">Restaurant Ratings</a></li>
                    </ul>
                </div>
                <div className="mt-4">
                    <div className="flex flex-row justify-start items-center gap-3">
                        <Image src={`/icons/COW Logo.svg`} alt={`Constantine Logo`} width={20} height={20}/>
                        <p className="text-lg font-bold">Costi Online</p>
                    </div>

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