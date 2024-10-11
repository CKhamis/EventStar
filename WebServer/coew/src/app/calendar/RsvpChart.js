"use client"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function RsvpChart({ total = 1, responded = 0 }) {
    return (
        <Card>
            <CardHeader className="pb-2">
                <CardDescription>RSVPs Left</CardDescription>
                <CardTitle className="text-4xl">{total - responded}</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="text-xs text-muted-foreground">
                    for coordination purposes
                </div>
            </CardContent>
            <CardFooter>
                <Progress value={(responded / total ) * 100} aria-label={total - responded + " left"} />
            </CardFooter>
        </Card>
    )
}
