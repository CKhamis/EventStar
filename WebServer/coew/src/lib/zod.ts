import { object, string } from "zod";

export const signInSchema = object({
    email: string({ required_error: "Email is required" })
        .min(6, "Email is required")
        .email("Invalid email address"),
    password: string({ required_error: "Password is required" })
        .min(1, "Password must be over 8 characters")
})