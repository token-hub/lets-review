import { BoxPropsType } from "@/types";

const Box = ({ text }: BoxPropsType) => {
    return (
        <div className="w-40 h-40 p-3 flex  items-center justify-center text-center break-all text-2xl font-bold border rounded-lg shadow-lg hover:shadow-md active:shadow-sm cursor-pointer transition duration-75 hover:text-yellow-500 hover:border-yellow-500">
            {text}
        </div>
    );
};

export default Box;
