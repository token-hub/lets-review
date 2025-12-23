import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { PrismaClient } from "../generated/prisma/client";
import { env } from "@/lib/env";

const adapter = new PrismaMariaDb({
    host: env.NEXT_DATABASE_HOST,
    user: env.NEXT_DATABASE_USER,
    password: env.NEXT_DATABASE_PASSWORD,
    database: env.NEXT_DATABASE_NAME,
    connectionLimit: Number(env.NEXT_CONNECTION_LIMIT),
    allowPublicKeyRetrieval: true,
});
const prisma = new PrismaClient({ adapter });

export { prisma };
