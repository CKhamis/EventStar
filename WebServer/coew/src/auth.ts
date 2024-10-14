import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

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
})