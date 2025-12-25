"use server";

import { signUpSchema, signInSchema } from "@/lib/validators";
import { BYCRYPT_SALT } from "@/lib/constants";
import { prisma } from "@/db/prisma";
import bcrypt from "bcrypt";
import { signIn, signOut } from "@/auth";
import { SignUpType, SignInType } from "@/types";
import { isRedirectError } from "next/dist/client/components/redirect-error";
import { redirect } from "next/navigation";

export async function signUp(data: SignUpType) {
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

export async function signInWithCredentials(data: SignInType) {
    try {
        signInSchema.parse(data);

        // signIn user
        await signIn("credentials", {
            redirectTo: "/",
            ...data,
        });

        return { success: true, message: "User authenticated" };
    } catch (error) {
        if (isRedirectError(error)) {
            throw error;
        }
        throw new Error("Invalid credentials");
    }
}

export async function signOutUser() {
    try {
        await signOut();
        redirect("/sign-in");
    } catch (error) {
        throw error;
    }
}
