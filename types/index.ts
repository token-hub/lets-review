import { z } from "zod";
import { createProgressSchema, getProgressSchema, getProgressQuestionSchema, signUpSchema } from "@/lib/validators";
import { signInSchema } from "@/lib/validators";

export type SignUpType = z.infer<typeof signUpSchema>;
export type SignInType = z.infer<typeof signInSchema>;
export type createProgressType = z.infer<typeof createProgressSchema>;
export type getProgressType = z.infer<typeof getProgressSchema>;
export type getProgressQuestionType = z.infer<typeof getProgressQuestionSchema>;

export type BoxPropsType = {
    text: string;
    owner: "topics" | "questionCount";
};

export type TopicsProps = {
    topics?: string[];
};

export type QuestionsProps = {
    questionsCount?: number[];
};

export type questionAnswerType = {
    id: string;
    answer: string;
};

export type progressQuestionType = {
    id: string;
    question: string;
    answerId: string;
    topicId: string;
    answers: questionAnswerType[];
} | null;
