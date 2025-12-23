import { z } from "zod";

const envSchema = z.object({
    NEXT_DATABASE_HOST: z.string(),
    NEXT_DATABASE_USER: z.string(),
    NEXT_DATABASE_PASSWORD: z.string(),
    NEXT_DATABASE_NAME: z.string(),
    NEXT_CONNECTION_LIMIT: z.coerce.number(),
});

export const env = envSchema.parse(process.env);
