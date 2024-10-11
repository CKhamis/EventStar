"use client"

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {CardDescription, CardFooter} from "../../../components/ui/card";
import Link from "next/link";
import {Button} from "../../../components/ui/button";
import {Badge} from "../../../components/ui/badge";

export default function EventDetails({event}) {
    return (
        <Card className="col-span-1 sm:col-span-2" x-chunk="dashboard-05-chunk-0">
            <CardHeader className="pb-3">
                <CardTitle>Event Name</CardTitle>
            </CardHeader>
            <CardContent>
                <Badge variant="secondary">Invite Only</Badge>
                <p className="mt-2 text-muted-foreground ">1/2/2024 at 6:00PM to 1/2/2024 at 11:59PM</p>
                <p className="mt-2">Address: 123 sesame st.</p>
                <p className="mt-4">Event Description Event Description Event Description Event Description Event Description Event Description Event Description Event Description Event Description Event Description Event Description Event Description Event Description Event Description Event Description </p>
            </CardContent>
            <CardContent>
                <h2 className="text-2xl font-bold">Agenda</h2>
                <div className="flex-col gap-4">
                    <div className="flex items-start align-middle gap-4 mt-5">
                        <div className="grid gap-1 flex-grow">
                            <p className="text-sm font-medium leading-none">Event Begins</p>
                            <p className="text-sm text-muted-foreground">
                                dfaklfj asldkf; jasdk fals kdfjla; sdfkja ls;fjasldfkja
                            </p>
                        </div>
                        <div className="text-xl">6:00PM</div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
