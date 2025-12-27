"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type ProgressContextType = {
    topic: string;
    // questionCount: number;
    handleTopic: (topic: string) => void;
    // handleQuestionCount: (count: number) => void;
};

type ProgressProviderProps = {
    children: ReactNode;
};

const ProgressContext = createContext<ProgressContextType | null>(null);

export const useProgress = () => {
    const ctx = useContext(ProgressContext);
    if (!ctx) throw new Error("useProgress must be used inside ProgressProvider");
    return ctx;
};

const ProgressProvider = ({ children }: ProgressProviderProps) => {
    const [topic, setTopic] = useState("");
    // const [questionCount, setQuestionCount] = useState(0);

    const handleTopic = (topic?: string) => {
        if (!topic) return;
        setTopic(topic);
    };

    // const handleQuestionCount = (count?: number) => {
    //     if (!count) return;
    //     setQuestionCount(count);
    // };

    const values = {
        topic,
        // questionCount,
        handleTopic,
        // handleQuestionCount,
    };

    return <ProgressContext value={values}>{children}</ProgressContext>;
};

export default ProgressProvider;
