"use client";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel, DropdownMenuSeparator,
    DropdownMenuTrigger
} from "./ui/dropdown-menu";
import {Button} from "./ui/button";
import {useSession} from "next-auth/react";
import {
    CircleUser,
} from "lucide-react"
import Link from "next/link"
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";

const AccountButton = () => {
    const {data: session} = useSession();
    console.log(session);
    if(session){
        return (
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="secondary" size="icon" className="rounded-full">
                        <Avatar className="hidden h-9 w-9 sm:flex">
                            <AvatarImage src="/icons/Logo.svg" alt="Avatar" />
                            <AvatarFallback>SD</AvatarFallback>
                        </Avatar>
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