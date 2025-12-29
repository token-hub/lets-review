import { useProgress } from "@/providers/progressProvider";
import { BoxPropsType } from "@/types";
import { boxOwner } from "@/lib/constants";
import { createProgress } from "@/lib/actions/progress.action";

const Box = ({ text, owner }: BoxPropsType) => {
    const ctx = useProgress();

    async function handleClick() {
        if (owner === boxOwner[0]) {
            ctx.handleTopic(text);
        } else {
            ctx.handleTopic("");
            await createProgress({
                userId: "aaaa",
                selectedTopicId: "cmjocmh8n0001u4vsa7l7f25p",
                questionCount: +text,
                isGuest: true,
            });
        }
    }

    return (
        <div
            onClick={handleClick}
            className="w-40 h-40 p-3 flex  items-center justify-center text-center break-all text-2xl font-bold border rounded-lg shadow-lg hover:shadow-md active:shadow-sm cursor-pointer transition duration-75 hover:text-yellow-500 hover:border-yellow-500"
        >
            {text.charAt(0).toLocaleUpperCase() + text.slice(1)}
        </div>
    );
};

export default Box;
