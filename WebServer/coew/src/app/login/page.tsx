"use client";
import Image from "next/image";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { signInSchema } from "@/lib/zod";
import LoadingButton from "@/components/ui/LoadingButton";
import { handleCredentialsSignin } from "@/app/actions/authActions";
import { useState } from "react";
import ErrorMessage from "@/components/ui/ErrorMessage";
import TopBar from "@/components/TopBar";

export default function SignIn() {
    const [globalError, setGlobalError] = useState<string>("");
    const form = useForm<z.infer<typeof signInSchema>>({
        resolver: zodResolver(signInSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = async (values: z.infer<typeof signInSchema>) => {
        try {
            const result = await handleCredentialsSignin(values);
            if (result?.message) {
                setGlobalError(result.message);
            }
        } catch (error) {
            console.log("An unexpected error occurred. Please try again.");
        }
    };

    return (
        <>
            <TopBar/>
            <div className="mt-10 flex justify-center items-center">
                <Card className="w-full max-w-sm rounded-none gradient">
                    <CardContent className="grid gap-4">
                        <div className="flex flex-row gap-3 justify-start items-center pt-6">
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
                        {globalError && <ErrorMessage error={globalError} />}
                        <Form {...form}>
                            <form
                                onSubmit={form.handleSubmit(onSubmit)}
                                className="space-y-8"
                            >
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Email</FormLabel>
                                            <FormControl>
                                                <Input type="email"
                                                    placeholder="Enter your email address"
                                                    autoComplete="off"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="password"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Password</FormLabel>
                                            <FormControl>
                                                <Input
                                                    type="password"
                                                    placeholder="Enter password"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <LoadingButton loading={form.formState.isSubmitting} text="Log In" />
                            </form>
                        </Form>
                    </CardContent>
                </Card>
            </div>
        </>
    );
}