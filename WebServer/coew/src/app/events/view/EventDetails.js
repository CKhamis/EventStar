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

            </CardContent>
            <CardFooter>
                <Link href="#calendar"><Button>View Calendar</Button></Link>
            </CardFooter>
        </Card>
    )
}
