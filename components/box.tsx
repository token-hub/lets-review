import { useProgress } from "@/providers/progressProvider";
import { BoxPropsType } from "@/types";
import { boxOwner } from "@/lib/constants";

const Box = ({ text, owner }: BoxPropsType) => {
    const ctx = useProgress();

    function handleClick() {
        if (owner === boxOwner[0]) {
            ctx.handleTopic(text);
        } else {
            ctx.handleQuestionCount(+text);
        }
    }

    return (
        <div
            onClick={handleClick}
            className="w-40 h-40 p-3 flex  items-center justify-center text-center break-all text-2xl font-bold border rounded-lg shadow-lg hover:shadow-md active:shadow-sm cursor-pointer transition duration-75 hover:text-yellow-500 hover:border-yellow-500"
        >
            {text}
        </div>
    );
};

export default Box;
