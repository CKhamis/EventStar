"use client"


import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"


import {ToggleGroup, ToggleGroupItem} from "@radix-ui/react-toggle-group";

const RsvpStatus = ({ status= null }) => {

    return (
        <Card className="flex flex-col lg:max-w-md">
            <CardHeader className="px-7">
                <CardTitle>RSVP Status</CardTitle>
                <CardDescription>
                    {status === null? "RSVP to the event here" : "Change RSVP status here."}
                </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-1 items-center">
                <ToggleGroup type="single" defaultValue={status} variant="outline">
                    <ToggleGroupItem value="yes">Yes</ToggleGroupItem>
                    <ToggleGroupItem value="maybe">Maybe</ToggleGroupItem>
                    <ToggleGroupItem value="no">No</ToggleGroupItem>
                </ToggleGroup>
            </CardContent>
        </Card>
    )
}

export default RsvpStatus;
