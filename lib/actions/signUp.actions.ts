"use server";

import { signUpSchema, signInSchema } from "@/lib/validators";
import { BYCRYPT_SALT } from "@/lib/constants";
import { prisma } from "@/db/prisma";
import bcrypt from "bcrypt";
import { signIn } from "@/auth";
import { SignUp } from "@/types";
import { isRedirectError } from "next/dist/client/components/redirect-error";

export async function signUp(data: SignUp) {
    try {
        const user = signUpSchema.parse(data);

        const plainPassword = user.password;

        const isExist = await prisma.user.findUnique({
            where: {
                email: user.email,
            },
            select: { id: true },
        });

        if (isExist) {
            throw new Error("Email already exists");
        }

        // hash password
        user.password = await bcrypt.hash(user.password, BYCRYPT_SALT);

        // create user
        await prisma.user.create({
            data: {
                name: user.name,
                email: user.email,
                password: user.password,
            },
        });

        // signIn user
        await signIn("credentials", {
            redirectTo: "/",
            email: user.email,
            password: plainPassword,
        });

        //TODO: create default topics
        return { success: true, message: "User registered successfully" };
    } catch (error) {
        if (isRedirectError(error)) {
            throw error;
        }
        throw error;
    }
}

export async function signInWithCredentials(formData: FormData) {
    try {
        signInSchema.parse({
            email: formData.get("email"),
            password: formData.get("password"),
        });

        // signIn user
        await signIn("credentials", formData);

        return { success: true, message: "User authenticated" };
    } catch (error) {
        throw error;
    }
}
