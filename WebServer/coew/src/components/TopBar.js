"use client";
import Link from "next/link"
import {
    Menu,
} from "lucide-react"
import {Button} from "@/components/ui/button"
import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet"
import Image from "next/image";
import AccountButton from "@/components/AccountButton";

const TopBar = ({ isLoggedIn=false }) => {
    const links = [
        <Link href="#" className="hover:text-foreground">Dashboard</Link>,
        <Link href="#" className="hover:text-foreground">Dashboard</Link>,
        <Link href="#" className="hover:text-foreground">Dashboard</Link>,
        <Link href="#" className="hover:text-foreground">Dashboard</Link>
    ];

    return (
        <header className="sticky top-0 h-16 gap-4 border-b bg-background px-4 md:px-6 flex justify-between items-center">
            <div className="flex flex-row items-center justify-start gap-2">
                <Link href="/">
                    <Image src={`/icons/Logo.svg`} alt={`Event Star Logo`} width={30} height={30}/>
                </Link>
                <Link href="/" className="text-foreground transition-colors hover:text-foreground font-bold">
                    EventStar
                </Link>
                <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6 ml-4">
                    {links}
                </nav>
            </div>
            <div className="flex flex-row items-center justify-end gap-6">
                <AccountButton isLoggedIn={isLoggedIn} />
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="outline" size="icon" className="shrink-0 md:hidden" >
                            <Menu className="h-5 w-5"/>
                            <span className="sr-only">Toggle navigation menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left">
                        <nav className="grid gap-6 text-lg font-medium">
                            <Link href="/" className="flex-row flex gap-3">
                                <Image src={`/icons/Logo.svg`} alt={`Event Star Logo`} width={30} height={30}/>
                                <p className="font-bold">EventStar</p>
                            </Link>
                            {links}
                        </nav>
                    </SheetContent>
                </Sheet>
            </div>

        </header>
    );
}

export default TopBar;