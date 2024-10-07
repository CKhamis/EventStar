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

const AccountButton = ({ isLoggedIn= false }) => {
    if(isLoggedIn){
        return (
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="secondary" size="icon" className="rounded-full">
                        <Image src={`/icons/Logo.svg`} alt={`Event Star Logo`} width={30} height={30} className="rounded-full"/>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator/>
                    <DropdownMenuItem>Settings</DropdownMenuItem>
                    <DropdownMenuItem>Support</DropdownMenuItem>
                    <DropdownMenuSeparator/>
                    <DropdownMenuItem>Logout</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        );
    }else{
        return (
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="secondary" size="icon" className="rounded-full">
                        <CircleUser className="h-5 w-5"/>
                        <span className="sr-only">Toggle user menu</span>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuItem><Link href="/">Register</Link></DropdownMenuItem>
                    <DropdownMenuSeparator/>
                    <DropdownMenuItem><Link href="/login">Sign In</Link></DropdownMenuItem>
                    <DropdownMenuItem><Link href="https://costionline.com/SignUp">Sign Up</Link></DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        );
    }
};

export default AccountButton;