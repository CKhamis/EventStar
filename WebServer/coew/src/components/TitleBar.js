import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel, DropdownMenuSeparator,
    DropdownMenuTrigger
} from "./ui/dropdown-menu";
import {Button} from "./ui/button";
import {
    CircleUser,
} from "lucide-react"
import Link from "next/link"
import Image from 'next/image';

const TitleBar = ({ title = "title" }) => {
    return (
        <div className="flex items-center gap-4">
            <Link href="/">
                <Button variant="outline" size="icon" className="h-9 w-9">
                    <CircleUser className="h-4 w-4"/>
                    <span className="sr-only">Home</span>
                </Button>
            </Link>
            <h1 className="flex-1 shrink-0 whitespace-nowrap text-2xl font-semibold tracking-tight sm:grow-0">
                {title}
            </h1>
        </div>
    );
};

export default TitleBar;