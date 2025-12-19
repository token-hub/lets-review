import { z } from "zod";

// Schema for signing in a user
export const signInSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
});

// Schema for signing up a user
export const signUpSchema = signInSchema
    .extend({
        name: z.string().min(3, "Name must be at least 3 characters"),
        confirmPassword: z.string().min(6, "Confirm password must be at least 6 characters"),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords don't match",
        path: ["confirmPassword"],
    });
