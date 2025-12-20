import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    pages: {
        signIn: "/sign-in",
        signOut: "/sign-out",
    },
    providers: [
        CredentialsProvider({
            credentials: {
                email: { type: "email" },
                password: { type: "password" },
            },
            async authorize(credentials) {
                if (credentials == null) return null;

                // Find user in database
                // Check if user exists and if the password matches
                // If user does not exist or password does not match return null
                // return user if found

                return null;
            },
        }),
    ],
});

export { handler as GET, handler as POST };
