import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import {signInSchema} from "@/lib/zod";

export const {handlers, signIn, signOut, auth} = NextAuth({
    providers: [
        Credentials({
            credentials: {
                email: {label: "Email", type: "email", placeholder: "Email"},
                password: {label: "Password", type: "password", placeholder: "Password"}
            },
            async authorize(credentials){
                let user = null;

                // validate credentials
                const parsedCredentials = signInSchema.safeParse(credentials);
                if(!parsedCredentials.success){
                    console.error("Invalid credentials: ", parsedCredentials.error.errors);
                    return null;
                }

                // get user

                user = {
                    id: '1',
                    name: 'costi',
                    email: 'c@c.com'
                }

                if(!user){
                    console.log("Invalid login");
                    return null;
                }

                return user;
            }
        })
    ],
    callbacks: {
        authorized({ request: { nextUrl }, auth }) {
            const isLoggedIn = !!auth?.user;
            const { pathname } = nextUrl;
            if (pathname.startsWith('/login') && isLoggedIn) {
                return Response.redirect(new URL('/', nextUrl));
            }
            return !!auth;
        },
    },
    pages: {
        signIn: "/login",
    }
})