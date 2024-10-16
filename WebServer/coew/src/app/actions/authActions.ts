"use server";
import { signIn, signOut } from "@/auth";

export async function handleCredentialsSignIn({ email, password }: { email: string; password: string }) {
    try{
        await signIn("credentials", { email, password });
    }catch(error){

    }
}