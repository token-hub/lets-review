import { auth } from "@/auth";
import Choices from "@/components/choices";
import { getProgress, getProgressQuestion } from "@/lib/actions/progress.action";
import { progressQuestionType } from "@/types";

export default async function Home() {
    const session = await auth();
    const userId = session?.user?.id;
    let question: progressQuestionType = null;

    const progress = await getProgress({ userId: userId as string });
    const hasProgess = Object.keys(progress ?? {}).length > 0;

    if (hasProgess) {
        question = await getProgressQuestion({ currentQuestionId: progress?.currentQuestionId as string });
    }

    return (
        <div className="flex justify-center items-center flex-col h-[calc(100vh-77px)] overflow-auto p-3">
            {hasProgess && question ? (
                <>
                    <p>Question: {question.question}</p>
                    <br />
                    <p>answers:</p>
                    {question.answers.map((answer) => (
                        <p key={answer.id}>{answer.answer}</p>
                    ))}
                </>
            ) : (
                <Choices />
            )}
        </div>
    );
}
