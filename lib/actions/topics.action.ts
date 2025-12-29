import { prisma } from "@/db/prisma";
import { getTopicsType } from "@/types";
import { getTopicsSchema } from "../validators";

export async function getTopics(data: getTopicsType) {
    try {
        const user = getTopicsSchema.parse(data);

        return await prisma.topic.findMany({
            where: {
                userId: user.userId,
            },
            select: {
                id: true,
                name: true,
            },
        });
    } catch (error) {
        throw error;
    }
}
