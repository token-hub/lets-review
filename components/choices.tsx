"use client";

import { questionsCountDefaultValue } from "@/lib/constants";
import QuestionsCount from "./questionsCount";
import Topics from "./topics";
import { useProgress } from "@/providers/progressProvider";

export default function Choices() {
    const { topic } = useProgress();

    return (
        <div className="flex justify-center items-center h-[calc(100vh-77px)] overflow-auto p-3">
            {!topic && <Topics topics={["Javascript", "React", "Node.js", "Mongodb", "CSS", "Bootsrap"]} />}
            {topic && <QuestionsCount questionsCount={questionsCountDefaultValue} />}
        </div>
    );
}
