// Context to manage questionaire shared data.

import React, { createContext, useContext, ReactNode, useState, useEffect } from "react";
import axios from "axios";
import { TCrop } from "../models/TCrop";

interface QuizContextProps {
    // We define our global state variables here.
    currentCrop: TCrop;
    setCurrentCrop: React.Dispatch<React.SetStateAction<TCrop>>;

    quizProgress: number;
    setQuizProgress: React.Dispatch<React.SetStateAction<number>>;

    answers: number[];
    setAnswers: React.Dispatch<React.SetStateAction<number[]>>;
}

const QuizContext = createContext<QuizContextProps | undefined>(undefined);

interface QuizProviderProps {
    children: ReactNode;
}

const QuizProvider: React.FC<QuizProviderProps> = ({ children }) => {
    const [answers, setAnswers] = useState<number[]>([]);
    const [currentCrop, setCurrentCrop] = useState<TCrop>({} as TCrop);
    
    // quiz progress starts as 0 then changes as we access deeper levels of the TCrop object.
    const [quizProgress, setQuizProgress] = useState(0);

    return (
        <QuizContext.Provider value={{ currentCrop, setCurrentCrop, quizProgress, setQuizProgress, answers, setAnswers }}>
            {children}
        </QuizContext.Provider>
    );
};

const useQuizContext = () => {
    const context = useContext(QuizContext);
    if (!context) {
        throw new Error('useQuizContext must be used within a QuizProvider');
    }
    return context;
};

export { QuizProvider, useQuizContext };
