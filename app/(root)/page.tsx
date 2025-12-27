"use client";

import Topics from "@/components/topics";
import QuestionsCount from "@/components/questionsCount";
import { questionsCountDefaultValue } from "@/lib/constants";
import { useProgress } from "@/providers/progressProvider";

export default function Home() {
    const { topic } = useProgress();
    const progress = null; // can be null or object
    const hasProgess = Object.keys(progress ?? {}).length > 0;

    return (
        <div className="flex justify-center items-center h-[calc(100vh-77px)] overflow-auto p-3">
            {hasProgess && <>Question Component here</>}
            {!hasProgess && !topic && <Topics topics={["Javascript", "React", "Node.js", "Mongodb", "CSS", "Bootsrap"]} />}
            {!hasProgess && topic && <QuestionsCount questionsCount={questionsCountDefaultValue} />}
        </div>
    );
}
