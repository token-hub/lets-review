"use client";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { questionAnswerType } from "@/types";

const Answers = ({ answers }: { answers: questionAnswerType[] }) => {
    function handleSelect(value: string) {
        console.log("Selected answer id:", value);
        // 👉 save to DB, update state, etc
    }

    return (
        <RadioGroup onValueChange={handleSelect} className="space-y-2 mt-3">
            {answers.map(({ id, answer }) => (
                <div
                    key={id}
                    className="flex items-center gap-3 [&:has([data-state=checked])]:border-yellow-500 bg-gray-100 p-3 rounded-2xl border hover:border-yellow-500 group cursor-pointer"
                >
                    <RadioGroupItem
                        className="
    h-5 w-5
    border-2 border-zinc-400
    data-[state=checked]:border-yellow-500
    data-[state=checked]:bg-yellow-500
    group-hover:border-yellow-500
    rounded-full
    transition
  "
                        value={id}
                        id={id}
                    />
                    <Label htmlFor={id} className="text-lg font-normal group-hover:cursor-pointer">
                        {answer.charAt(0).toLocaleUpperCase() + answer.slice(1)}
                    </Label>
                </div>
            ))}
        </RadioGroup>
    );
};

export default Answers;
