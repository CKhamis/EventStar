"use client"

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {Button} from "@/components/ui/button";

export default function RsvpStatus({status}) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>RSVP Status</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid gap-6">
                    <div className="grid gap-3">
                        <Label htmlFor="status">Status</Label>
                        <Select>
                            <SelectTrigger id="status" aria-label="Select status">
                                <SelectValue placeholder="Select status" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="yes">Yes</SelectItem>
                                <SelectItem value="maybe">Maybe</SelectItem>
                                <SelectItem value="no">No</SelectItem>
                            </SelectContent>
                        </Select>
                        {status === null? <Button variant="secondary">Update</Button> : <Button>Save</Button>}

                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
