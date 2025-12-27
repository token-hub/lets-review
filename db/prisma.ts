import "dotenv/config";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { PrismaClient } from "../generated/prisma/client";

const adapter = new PrismaMariaDb({
    host: process.env.NEXT_DATABASE_HOST,
    user: process.env.NEXT_DATABASE_USER,
    password: process.env.NEXT_DATABASE_PASSWORD,
    database: process.env.NEXT_DATABASE_NAME,
    connectionLimit: Number(process.env.NEXT_CONNECTION_LIMIT),
    allowPublicKeyRetrieval: true,
});
const prisma = new PrismaClient({ adapter });

export { prisma };
