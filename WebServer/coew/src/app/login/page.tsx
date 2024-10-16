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
import { Form } from "react-hook-form";
import {FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { signInSchema } from "@/lib/zod";
import {Loader2} from "lucide-react";
import LoadingButton from "@/components/ui/LoadingButton";


export default function Home() {
    const form = useForm<z.infer<typeof signInSchema>>({
        resolver: zodResolver(signInSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = async(values: z.infer<typeof  signInSchema) => {
        try{
            
        }catch(error){
            console.log(error);
        }
    }


    return (<>
            <TopBar/>
            <div className="mt-10 flex justify-center items-center">
                <Card className="w-full max-w-sm rounded-none gradient">
                    <CardContent className="grid gap-4">
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
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)}>
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel>Email</FormLabel>
                                            <FormControl>
                                                <Input
                                                    type="email"
                                                    placeholder="Enter your email address"
                                                    autoComplete="off"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="password"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel>Password</FormLabel>
                                            <FormControl>
                                                <Input
                                                    type="password"
                                                    placeholder="Enter password"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />
                            </form>

                            <div className="grid gap-2">
                                <LoadingButton text="Sign In" loading={form.formState.isSubmitting} />
                            </div>

                            <div className="mt-4 text-center text-sm">
                                Don&apos;t have an account?{" "}
                                <Link href="https://costionline.com/SignUp" className="underline">
                                    Sign up
                                </Link>
                            </div>
                        </Form>
                    </CardContent>
                </Card>
            </div>
    </>);
}
