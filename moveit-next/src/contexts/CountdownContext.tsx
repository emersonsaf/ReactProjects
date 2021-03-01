import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengeContext } from "./ChallengeContext";

interface CountdownContextData {
    minutes: number;
    seconds: number;
    hasFinished: boolean;
    isActive: boolean;
    resetCountdown: () => void;
    startCountdown: () => void;
}

interface CountdownProviderProps {
    children: ReactNode;
}

export const CountdownContext = createContext( {} as CountdownContextData);

export function CountdownProvider({children}: CountdownProviderProps){
    let countdownTimeout: NodeJS.Timeout;
    let vTime = 0.1 * 60; // Tempo do contador

    const { startNewChallenge, resetChallenge } = useContext(ChallengeContext);

    const [time, setTime] = useState(vTime);
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    function startCountdown() {
        setIsActive(true);
    }

    function resetCountdown() {
        clearTimeout(countdownTimeout);
        setIsActive(false);
        setTime(vTime);
    }

    useEffect(() => {
        if (isActive && time > 0) {
            countdownTimeout = setTimeout(() => {
                setTime(time - 1);
            }, 1000)
        } else if (isActive && time === 0) {
            setHasFinished(true);
            setIsActive(false);
            startNewChallenge();
        }
    }, [isActive, time])

    return(
        <CountdownContext.Provider value={{
            minutes,
            seconds,
            hasFinished,
            isActive,
            resetCountdown,
            startCountdown,
        }}>
            {children}
        </CountdownContext.Provider>
    );
}