import Topics from "@/components/topics";

export default function Home() {
    return (
        <div className="flex justify-center items-center h-[calc(100vh-77px)] overflow-auto p-3">
            <Topics topics={["Javascript", "Tailwind", "React", "Node", "HTML", "CSS"]} />
        </div>
    );
}
