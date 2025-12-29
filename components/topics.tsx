import { memo } from "react";
import { TopicsProps } from "@/types";
import Box from "./box";
import { boxOwner } from "@/lib/constants";

const Topics = ({ topics = [] }: TopicsProps) => {
    return (
        <div>
            <p className="text-2xl text-center font-bold mb-5">Select topic to review</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2  ">
                {topics.map(({ id, name }) => {
                    return <Box owner={boxOwner[0]} text={name} key={id} />;
                })}
            </div>
        </div>
    );
};

export default memo(Topics);
