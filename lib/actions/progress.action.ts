"use server";

import { createProgressType } from "@/types";
import { revalidatePath } from "next/cache";
import { createProgressSchema } from "../validators";
import { prisma } from "@/db/prisma";

export async function createProgress(data: createProgressType) {
    try {
        const progress = createProgressSchema.parse(data);

        const question = await prisma.question.findFirst({
            where: {
                topicId: progress.selectedTopicId,
            },
            take: 1,
            select: {
                id: true,
            },
        });

        if (!question) {
            throw new Error("Question does not exist");
        }

        // create new progress
        await prisma.progress.create({
            data: {
                selectedTopicId: progress.selectedTopicId,
                currentQuestionId: question.id,
                questionCount: progress.questionCount,
                userId: progress.userId,
                isGuest: progress.isGuest,
            },
        });

        revalidatePath("/");
    } catch (error) {
        throw error;
    }
}
