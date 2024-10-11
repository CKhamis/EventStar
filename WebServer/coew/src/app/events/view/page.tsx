"use client";
import TopBar from "@/components/TopBar";
import TitleBar from "@/components/TitleBar";
import Footer from "@/components/Footer";
import { useSearchParams } from 'next/navigation';
import RsvpStatus from "@/app/events/view/RsvpStatus";
import {Card, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import RsvpChart from "@/app/calendar/RsvpChart";
import InviteList from "@/app/events/view/InviteList";
import EventDetails from "@/app/events/view/EventDetails";


export default function EventView() {
    const searchParams = useSearchParams();
    const eventId = searchParams.get('id');

    const testList = [
        {firstName: "costi", lastName: "khamis", rsvp: "yes"},
        {firstName: "costi", lastName: "khamis", rsvp: "yes"},
        {firstName: "costi", lastName: "khamis", rsvp: "yes"},
        {firstName: "costi", lastName: "khamis", rsvp: "yes"},
        {firstName: "costi", lastName: "khamis", rsvp: "yes"},
        {firstName: "costi", lastName: "khamis", rsvp: "yes"},
    ]

    return (
        <>
            <TopBar isLoggedIn={true}/>
            <div className="flex flex-1 flex-col gap-6 p-4 md:gap-5 md:p-8 container">
                <TitleBar title="View Event" />
                <div className="grid flex-1 items-start gap-4 lg:grid-cols-3 xl:grid-cols-3">
                    <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
                        <EventDetails event={{}}/>
                    </div>
                    <div className="flex flex-col gap-4">
                        <RsvpStatus id="rsvo=p" status="maybe" />
                        <InviteList inviteList={testList} />
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}
