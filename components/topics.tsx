type TopicsProps = {
    topics?: string[];
};

const Topics = ({ topics = [] }: TopicsProps) => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2  ">
            {topics.map((topic) => {
                return (
                    <div
                        key={topic}
                        className="w-40 h-40 p-3 flex  items-center justify-center text-center break-all text-2xl font-bold border rounded-lg shadow-lg hover:shadow-md active:shadow-sm cursor-pointer transition duration-75 hover:text-yellow-500 hover:border-yellow-500"
                    >
                        {topic}
                    </div>
                );
            })}
        </div>
    );
};

export default Topics;
