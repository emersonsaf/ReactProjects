import { useContext } from 'react';
import style from '../styles/components/Countdown.module.css'
import {  } from '../contexts/CountdownContext';


let vTime = 0.1 * 60; // Tempo do contador


export default function Countdown() {
    const {
        minutes,
        seconds,
        hasFinished,
        isActive,
        resetCountdown,
        startCountdown
    } = useContext(CountdownContext);

    
    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    return (
        <div>
            <div className={style.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            { hasFinished ? (
                <button disabled className={style.countdownButton}
                >
                    Ciclo encerrado
                </button>
            ) : (
                    <>
                        { isActive ? (
                            <button type="button" className={`${style.countdownButton} ${style.countdownButtonActive}`}
                                onClick={resetCountdown}>
                                Finalizar o ciclo
                            </button>
                        ) : (
                                <button type="button" className={style.countdownButton}
                                    onClick={startCountdown}>
                                    Iniciar um ciclo
                                </button>
                            )}
                    </>
                )}
        </div>
    );
}