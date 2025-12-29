"use client";

import { questionsCountDefaultValue } from "@/lib/constants";
import QuestionsCount from "./questionsCount";
import Topics from "./topics";
import { useProgress } from "@/providers/progressProvider";
import { TopicsProps } from "@/types";

export default function Choices({ topics }: TopicsProps) {
    const { topic } = useProgress();

    return (
        <div className="flex justify-center items-center h-[calc(100vh-77px)] overflow-auto p-3">
            {!topic && <Topics topics={topics} />}
            {topic && <QuestionsCount questionsCount={questionsCountDefaultValue} />}
        </div>
    );
}
