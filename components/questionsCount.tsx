import { memo } from "react";
import { QuestionsProps } from "@/types";
import Box from "./box";
import { boxOwner } from "@/lib/constants";

const QuestionsCount = ({ questionsCount = [] }: QuestionsProps) => {
    return (
        <div>
            <p className="text-2xl text-center font-bold mb-5">Select number of questions</p>
            <div className="grid grid-cols-2 gap-2  ">
                {questionsCount.map((count) => {
                    return <Box owner={boxOwner[1]} text={`${count}`} key={count} />;
                })}
            </div>
        </div>
    );
};

export default memo(QuestionsCount);
