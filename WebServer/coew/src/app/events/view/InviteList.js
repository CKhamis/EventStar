"use client"

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import {
    Card,
    CardContent, CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";

export default function InviteList({inviteList}) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Invite List</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-8">
                <Tabs defaultValue="yes">
                    <TabsList className="">
                        <TabsTrigger value="yes">Yes</TabsTrigger>
                        <TabsTrigger value="no">No</TabsTrigger>
                        <TabsTrigger value="maybe">Maybe</TabsTrigger>
                    </TabsList>
                    <TabsContent value="yes" className="gap-5">
                        {
                            inviteList
                                .filter(person => person.rsvp === 'yes')
                                .map((person,index) => (
                                        <div className="flex items-center gap-4 mt-5">
                                            <Avatar className="hidden h-9 w-9 sm:flex">
                                                <AvatarImage src="/avatars/01.png" alt="Avatar"/>
                                                <AvatarFallback>OM</AvatarFallback>
                                            </Avatar>
                                            <div className="grid gap-1">
                                                <p className="text-sm font-medium leading-none">{person.firstName + " " + person.lastName}</p>
                                                <p className="text-sm text-muted-foreground">
                                                    person.rsvp
                                                </p>
                                            </div>
                                            <div className="ml-auto font-medium">+$1,999.00</div>
                                        </div>
                                    )
                                )
                        }
                    </TabsContent>
                    <TabsContent value="no" className="gap-5">
                        {
                            inviteList
                                .filter(person => person.rsvp === 'no')
                                .map((person,index) => (
                                        <div className="flex items-center gap-4 mt-5">
                                            <Avatar className="hidden h-9 w-9 sm:flex">
                                                <AvatarImage src="/avatars/01.png" alt="Avatar"/>
                                                <AvatarFallback>OM</AvatarFallback>
                                            </Avatar>
                                            <div className="grid gap-1">
                                                <p className="text-sm font-medium leading-none">{person.firstName + " " + person.lastName}</p>
                                                <p className="text-sm text-muted-foreground">
                                                    person.rsvp
                                                </p>
                                            </div>
                                            <div className="ml-auto font-medium">+$1,999.00</div>
                                        </div>
                                    )
                                )
                        }
                    </TabsContent>
                    <TabsContent value="maybe" className="gap-5">
                        {
                            inviteList
                                .filter(person => person.rsvp !== 'yes' && person.rsvp !== 'no')
                                .map((person,index) => (
                                    <div className="flex items-center gap-4 mt-5">
                                        <Avatar className="hidden h-9 w-9 sm:flex">
                                            <AvatarImage src="/avatars/01.png" alt="Avatar"/>
                                            <AvatarFallback>OM</AvatarFallback>
                                        </Avatar>
                                        <div className="grid gap-1">
                                            <p className="text-sm font-medium leading-none">{person.firstName + " " + person.lastName}</p>
                                            <p className="text-sm text-muted-foreground">
                                                person.rsvp
                                            </p>
                                        </div>
                                        <div className="ml-auto font-medium">+$1,999.00</div>
                                    </div>
                                )
                            )
                        }
                    </TabsContent>
                </Tabs>
            </CardContent>
            <CardFooter>
                <div className="text-xs text-muted-foreground">
                    {inviteList.length} members invited
                </div>
            </CardFooter>
        </Card>
    )
}
