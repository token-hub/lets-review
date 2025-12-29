import { auth } from "@/auth";
import Choices from "@/components/choices";
import { getProgress, getProgressQuestion } from "@/lib/actions/progress.action";
import { progressQuestionType } from "@/types";

import Answers from "@/components/answers";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";

export default async function Home() {
    const session = await auth();
    const userId = session?.user?.id;
    let question: progressQuestionType = null;

    const progress = await getProgress({ userId: userId as string });
    const hasProgess = Object.keys(progress ?? {}).length > 0;

    if (hasProgess) {
        question = await getProgressQuestion({ currentQuestionId: progress?.currentQuestionId as string });
    }

    const isSubmitting = false;
    const hasSelectedAnswer = true;

    return (
        <div className="flex justify-center items-center flex-col h-[calc(100vh-77px)] overflow-auto p-3">
            {hasProgess && question ? (
                <div className="w-max-36 p-3 space-y-5">
                    <p className="text-2xl text-center  pb-2">{question.question}</p>
                    <Answers answers={question.answers} />

                    <div className="w-full flex justify-end">
                        <Button disabled={isSubmitting} type="submit" className={`w-full md:w-32 ${hasSelectedAnswer ? "" : "invisible"}`}>
                            {isSubmitting && <Spinner />} Submit
                        </Button>
                    </div>
                </div>
            ) : (
                <Choices />
            )}
        </div>
    );
}
