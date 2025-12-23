import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "./db/prisma";
import type { NextAuthConfig } from "next-auth";
import bcrypt from "bcrypt";
import { signInSchema } from "./lib/validators";

const config = {
    pages: {
        signIn: "/sign-in",
        signOut: "/sign-out",
    },
    adapter: PrismaAdapter(prisma),
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60, // 30 days
    },
    providers: [
        CredentialsProvider({
            credentials: {
                email: { type: "email" },
                password: { type: "password" },
            },
            async authorize(credentials) {
                if (credentials == null) return null;

                const { email, password } = signInSchema.parse(credentials);

                // Find user in database
                const user = await prisma.user.findFirst({
                    where: {
                        email: email,
                    },
                    select: {
                        id: true,
                        name: true,
                        email: true,
                        password: true,
                    },
                });

                // Check if user exists and if the password matches
                if (user && user.password) {
                    const isMatch = await bcrypt.compare(password, user.password);

                    // If password is correct, return user
                    if (isMatch) {
                        return {
                            id: user.id,
                            name: user.name,
                            email: user.email,
                        };
                    }
                }
                // If user does not exist or password does not match return null
                return null;
            },
        }),
    ],
} satisfies NextAuthConfig;

export const { handlers, signIn, signOut, auth } = NextAuth(config);
