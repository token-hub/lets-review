import { memo } from "react";
import { TopicsProps } from "@/types";
import Box from "./box";
import { boxOwner } from "@/lib/constants";

const Topics = ({ topics = [] }: TopicsProps) => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2  ">
            {topics.map((topic) => {
                return <Box owner={boxOwner[0]} text={topic} key={topic} />;
            })}
        </div>
    );
};

export default memo(Topics);
