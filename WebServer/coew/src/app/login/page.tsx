"use client";
import TopBar from "../../components/TopBar";
import {Card, CardTitle, CardDescription, CardContent} from "@/components/ui/card";
import {Label} from "@radix-ui/react-dropdown-menu";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import {useState} from "react";

export default function Home() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = () => {
        const state = {username, password};
        console.log(state);
        axios
            .post('http://localhost:3002/api/auth/login', state, {
                withCredentials: true,
            })
            .then(function (response) {
                console.log(response);
                localStorage.setItem('token', response.data.token);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    return (<>
            <TopBar/>
            <div className="mt-10 flex justify-center items-center">
                <Card className="w-full max-w-sm rounded-none gradient">
                    <div className="flex flex-row gap-3 justify-start items-center p-6">
                        <Image
                            src={`/icons/COW Logo.svg`}
                            alt={`Costi Online Logo`}
                            width={40}
                            height={40}
                            className="hover-minimize"
                        />
                        <div className="m-0">
                            <CardTitle className="text-2xl">Sign In</CardTitle>
                            <CardDescription>Enter your Costi Online Credentials.</CardDescription>
                        </div>
                    </div>
                    <CardContent className="grid gap-4">
                        <div className="grid gap-2">
                            <Label>Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="m@example.com"
                                name="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label>Password</Label>
                            <Input
                                id="password"
                                type="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <Button type="button" className="w-full" onClick={handleSubmit}>
                                Sign In
                            </Button>
                        </div>

                        <div className="mt-4 text-center text-sm">
                            Don&apos;t have an account?{" "}
                            <Link href="https://costionline.com/SignUp" className="underline">
                                Sign up
                            </Link>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </>);
}
