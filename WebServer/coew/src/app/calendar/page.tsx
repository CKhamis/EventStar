"use client";
import {
    ChevronLeft,
    ChevronRight, CircleUser,
    Copy,
    CreditCard,
    File,
    Home,
    LineChart,
    ListFilter,
    MoreVertical,
    Package,
    Package2,
    PanelLeft,
    Search,
    Settings,
    ShoppingCart,
    Truck,
    Users2,
} from "lucide-react"
import AttendanceChart from "./AttendanceChart"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Progress } from "@/components/ui/progress"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import {
    Tooltip,
    TooltipContent, TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import TopBar from "@/components/TopBar";
import RsvpChart from "@/app/calendar/RsvpChart";
import {useState} from "react";
import Link from "next/link";
import TitleBar from "@/components/TitleBar";
import Footer from "@/components/Footer";

export default function Calendar() {
    const [totalEvents, setTotalEvents] = useState(1);
    const [respondedRsvp, setRespondedRsvp] = useState(0);

    return (
        <TooltipProvider>
            <TopBar />
            <div className="flex min-h-screen w-full flex-col">
                <div className="flex flex-1 flex-col gap-6 p-4 md:gap-5 md:p-8 container">
                    <TitleBar title="Calendar" />
                    <main className="grid flex-1 items-start gap-4 lg:grid-cols-3 xl:grid-cols-3">
                        <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
                            <div className="grid gap-4 sm:grid-cols-3">
                                <Card className="col-span-1 sm:col-span-2" x-chunk="dashboard-05-chunk-0">
                                    <CardHeader className="pb-3">
                                        <CardTitle>Your Calendar</CardTitle>
                                        <CardDescription className="max-w-lg text-balance leading-relaxed">
                                            Below are events that you have been invited to. Make sure to reply to RSVPs
                                        </CardDescription>
                                    </CardHeader>
                                    <CardFooter>
                                        <Link href="#calendar"><Button>View Calendar</Button></Link>
                                    </CardFooter>
                                </Card>
                                <RsvpChart responded={respondedRsvp} total={totalEvents}/>
                            </div>
                            <Tabs defaultValue="week" id="calendar">
                                <div className="flex items-center">
                                    <TabsList>
                                        <TabsTrigger value="week">Week</TabsTrigger>
                                        <TabsTrigger value="month">Month</TabsTrigger>
                                        <TabsTrigger value="year">Year</TabsTrigger>
                                    </TabsList>
                                    <div className="ml-auto flex items-center gap-2">
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    className="h-7 gap-1 text-sm"
                                                >
                                                    <ListFilter className="h-3.5 w-3.5"/>
                                                    <span className="sr-only sm:not-sr-only">Filter</span>
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                                                <DropdownMenuSeparator/>
                                                <DropdownMenuCheckboxItem checked>
                                                    Fulfilled
                                                </DropdownMenuCheckboxItem>
                                                <DropdownMenuCheckboxItem>
                                                    Declined
                                                </DropdownMenuCheckboxItem>
                                                <DropdownMenuCheckboxItem>
                                                    Refunded
                                                </DropdownMenuCheckboxItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                        <Button
                                            size="sm"
                                            variant="outline"
                                            className="h-7 gap-1 text-sm"
                                        >
                                            <File className="h-3.5 w-3.5"/>
                                            <span className="sr-only sm:not-sr-only">Export</span>
                                        </Button>
                                    </div>
                                </div>
                                <TabsContent value="week">
                                    <Card x-chunk="dashboard-05-chunk-3">
                                        <CardHeader className="px-7">
                                            <CardTitle>Orders</CardTitle>
                                            <CardDescription>
                                                Recent orders from your store.
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <Table>
                                                <TableHeader>
                                                    <TableRow>
                                                        <TableHead>Customer</TableHead>
                                                        <TableHead className="hidden sm:table-cell">
                                                            Type
                                                        </TableHead>
                                                        <TableHead className="hidden sm:table-cell">
                                                            Status
                                                        </TableHead>
                                                        <TableHead className="hidden md:table-cell">
                                                            Date
                                                        </TableHead>
                                                        <TableHead className="text-right">Amount</TableHead>
                                                    </TableRow>
                                                </TableHeader>
                                                <TableBody>
                                                    <TableRow className="bg-accent">
                                                        <TableCell>
                                                            <div className="font-medium">Liam Johnson</div>
                                                            <div
                                                                className="hidden text-sm text-muted-foreground md:inline">
                                                                liam@example.com
                                                            </div>
                                                        </TableCell>
                                                        <TableCell className="hidden sm:table-cell">
                                                            Sale
                                                        </TableCell>
                                                        <TableCell className="hidden sm:table-cell">
                                                            <Badge className="text-xs" variant="secondary">
                                                                Fulfilled
                                                            </Badge>
                                                        </TableCell>
                                                        <TableCell className="hidden md:table-cell">
                                                            2023-06-23
                                                        </TableCell>
                                                        <TableCell className="text-right">$250.00</TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell>
                                                            <div className="font-medium">Olivia Smith</div>
                                                            <div
                                                                className="hidden text-sm text-muted-foreground md:inline">
                                                                olivia@example.com
                                                            </div>
                                                        </TableCell>
                                                        <TableCell className="hidden sm:table-cell">
                                                            Refund
                                                        </TableCell>
                                                        <TableCell className="hidden sm:table-cell">
                                                            <Badge className="text-xs" variant="outline">
                                                                Declined
                                                            </Badge>
                                                        </TableCell>
                                                        <TableCell className="hidden md:table-cell">
                                                            2023-06-24
                                                        </TableCell>
                                                        <TableCell className="text-right">$150.00</TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell>
                                                            <div className="font-medium">Noah Williams</div>
                                                            <div
                                                                className="hidden text-sm text-muted-foreground md:inline">
                                                                noah@example.com
                                                            </div>
                                                        </TableCell>
                                                        <TableCell className="hidden sm:table-cell">
                                                            Subscription
                                                        </TableCell>
                                                        <TableCell className="hidden sm:table-cell">
                                                            <Badge className="text-xs" variant="secondary">
                                                                Fulfilled
                                                            </Badge>
                                                        </TableCell>
                                                        <TableCell className="hidden md:table-cell">
                                                            2023-06-25
                                                        </TableCell>
                                                        <TableCell className="text-right">$350.00</TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell>
                                                            <div className="font-medium">Emma Brown</div>
                                                            <div
                                                                className="hidden text-sm text-muted-foreground md:inline">
                                                                emma@example.com
                                                            </div>
                                                        </TableCell>
                                                        <TableCell className="hidden sm:table-cell">
                                                            Sale
                                                        </TableCell>
                                                        <TableCell className="hidden sm:table-cell">
                                                            <Badge className="text-xs" variant="secondary">
                                                                Fulfilled
                                                            </Badge>
                                                        </TableCell>
                                                        <TableCell className="hidden md:table-cell">
                                                            2023-06-26
                                                        </TableCell>
                                                        <TableCell className="text-right">$450.00</TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell>
                                                            <div className="font-medium">Liam Johnson</div>
                                                            <div
                                                                className="hidden text-sm text-muted-foreground md:inline">
                                                                liam@example.com
                                                            </div>
                                                        </TableCell>
                                                        <TableCell className="hidden sm:table-cell">
                                                            Sale
                                                        </TableCell>
                                                        <TableCell className="hidden sm:table-cell">
                                                            <Badge className="text-xs" variant="secondary">
                                                                Fulfilled
                                                            </Badge>
                                                        </TableCell>
                                                        <TableCell className="hidden md:table-cell">
                                                            2023-06-23
                                                        </TableCell>
                                                        <TableCell className="text-right">$250.00</TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell>
                                                            <div className="font-medium">Liam Johnson</div>
                                                            <div
                                                                className="hidden text-sm text-muted-foreground md:inline">
                                                                liam@example.com
                                                            </div>
                                                        </TableCell>
                                                        <TableCell className="hidden sm:table-cell">
                                                            Sale
                                                        </TableCell>
                                                        <TableCell className="hidden sm:table-cell">
                                                            <Badge className="text-xs" variant="secondary">
                                                                Fulfilled
                                                            </Badge>
                                                        </TableCell>
                                                        <TableCell className="hidden md:table-cell">
                                                            2023-06-23
                                                        </TableCell>
                                                        <TableCell className="text-right">$250.00</TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell>
                                                            <div className="font-medium">Olivia Smith</div>
                                                            <div
                                                                className="hidden text-sm text-muted-foreground md:inline">
                                                                olivia@example.com
                                                            </div>
                                                        </TableCell>
                                                        <TableCell className="hidden sm:table-cell">
                                                            Refund
                                                        </TableCell>
                                                        <TableCell className="hidden sm:table-cell">
                                                            <Badge className="text-xs" variant="outline">
                                                                Declined
                                                            </Badge>
                                                        </TableCell>
                                                        <TableCell className="hidden md:table-cell">
                                                            2023-06-24
                                                        </TableCell>
                                                        <TableCell className="text-right">$150.00</TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell>
                                                            <div className="font-medium">Emma Brown</div>
                                                            <div
                                                                className="hidden text-sm text-muted-foreground md:inline">
                                                                emma@example.com
                                                            </div>
                                                        </TableCell>
                                                        <TableCell className="hidden sm:table-cell">
                                                            Sale
                                                        </TableCell>
                                                        <TableCell className="hidden sm:table-cell">
                                                            <Badge className="text-xs" variant="secondary">
                                                                Fulfilled
                                                            </Badge>
                                                        </TableCell>
                                                        <TableCell className="hidden md:table-cell">
                                                            2023-06-26
                                                        </TableCell>
                                                        <TableCell className="text-right">$450.00</TableCell>
                                                    </TableRow>
                                                </TableBody>
                                            </Table>
                                        </CardContent>
                                    </Card>
                                </TabsContent>
                            </Tabs>
                        </div>
                        <div className="">
                            <AttendanceChart/>
                        </div>
                    </main>
                </div>
            </div>
            <Footer/>
        </TooltipProvider>
    );
}
