import Image from 'next/image';

const Sidebar = () => {
    return (
        <div className="fixed top-0 w-16 h-screen bg-gray-900 left-0 flex flex-col">
            <ul className="flex-grow">
                <li className="mb-4">
                    <a href="http://costionline.com" className="decoration-0" role="button">
                        <Image src="/icons/Logo.svg" alt="logo" className="aspect-square p-2.5" width={100}
                               height={100}/>
                    </a>
                </li>

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
    <li className="border-b border-gray-600 group">
        <a href={url} className="decoration-0" role="button">
            <Image src={iconSrc} alt="logo" className="aspect-square p-2.5" width={100}
                   height={100}/>
        </a>
        <span className="absolute w-auto left-20 shadow-md
        text-white bg-gray-900
        text-xs font-bold opacity-50
        transition-all duration-200 origin-left group-hover:opacity-100">
            {text}
        </span>
    </li>
);


export default Sidebar;