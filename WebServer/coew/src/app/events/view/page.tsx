"use client";
import TopBar from "@/components/TopBar";
import TitleBar from "@/components/TitleBar";
import Footer from "@/components/Footer";
import { useSearchParams } from 'next/navigation';


export default function EventView() {
    const searchParams = useSearchParams();
    const eventId = searchParams.get('id');

    return (
        <>
            <TopBar isLoggedIn={false}/>
            <div className="flex flex-1 flex-col gap-6 p-4 md:gap-5 md:p-8 container">
                <TitleBar title="View Event" />
                <div className="">

                </div>
            </div>
            <Footer/>
        </>
    );
}
