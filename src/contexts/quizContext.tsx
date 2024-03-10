// Context to manage questionaire shared data.

import React, { createContext, useContext, ReactNode, useState, useEffect } from "react";
import axios from "axios";
import { TCrop } from "../models/TCrop";
import { TDisease } from "../models/TDisease";

interface QuizContextProps {
    // We define our global state variables here.
    currentCrop: TCrop;
    setCurrentCrop: React.Dispatch<React.SetStateAction<TCrop>>;

    quizProgress: number;
    setQuizProgress: React.Dispatch<React.SetStateAction<number>>;

    answers: number[];
    setAnswers: React.Dispatch<React.SetStateAction<number[]>>;

    identifiedDisease: TDisease;
    setIdentifiedDisease: React.Dispatch<React.SetStateAction<TDisease>>;
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

    // once we identify the disease, we can store it in the context:
    const [identifiedDisease, setIdentifiedDisease] = useState<TDisease>({} as TDisease);

    return (
        <QuizContext.Provider value={{ currentCrop, setCurrentCrop, quizProgress, setQuizProgress, answers, setAnswers, identifiedDisease, setIdentifiedDisease }}>
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
