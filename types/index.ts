import { z } from "zod";
import { createProgressSchema, signUpSchema } from "@/lib/validators";
import { signInSchema } from "@/lib/validators";

export type SignUpType = z.infer<typeof signUpSchema>;
export type SignInType = z.infer<typeof signInSchema>;
export type createProgressType = z.infer<typeof createProgressSchema>;

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
