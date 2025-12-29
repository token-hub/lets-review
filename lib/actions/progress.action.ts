"use server";

import { createProgressType, getProgressType, getProgressQuestionType } from "@/types";
import { revalidatePath } from "next/cache";
import { createProgressSchema, getProgressSchema, getProgressQuestionSchema } from "../validators";
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

export async function getProgress(data: getProgressType) {
    try {
        const user = getProgressSchema.parse(data);

        return await prisma.progress.findFirst({
            where: {
                userId: user.userId,
            },
        });
    } catch (error) {
        throw error;
    }
}

export async function getProgressQuestion(data: getProgressQuestionType) {
    try {
        const question = getProgressQuestionSchema.parse(data);

        return await prisma.question.findFirst({
            where: {
                id: question.currentQuestionId,
            },
            select: {
                id: true,
                question: true,
                answerId: true,
                topicId: true,
                answers: {
                    select: {
                        id: true,
                        answer: true,
                    },
                },
            },
        });
    } catch (error) {
        throw error;
    }
}
