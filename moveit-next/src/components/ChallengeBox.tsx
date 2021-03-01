import { useContext, useState } from 'react';
import { ChallengeContext } from '../contexts/ChallengeContext';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/ChallengeBox.module.css'

export default function ChallengeBox() {
    const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengeContext);
    const { resetCountdown } = useContext(CountdownContext)

    function handleChallengeSucceeded() {
        completeChallenge();
        resetCountdown();
    }

    function handleChallengeFailed() {
        resetChallenge();
        resetCountdown();
    }

    return (
        <div className={styles.challengeBoxContainer}>
            { activeChallenge ? (
                <div className={styles.challengeActive}>
                    <header>Ganhe {activeChallenge.amount}</header>
                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} />
                        <strong>
                            <p>{activeChallenge.description}</p>
                        </strong>
                    </main>
                    <footer>
                        <button type="button"
                            className={styles.challengeFailButton}
                            onClick={handleChallengeFailed}
                        >
                            Falhei</button>
                        <button type="button"
                            className={styles.challengeSucceededButton}
                            onClick={handleChallengeSucceeded}
                        >
                            Completei</button>
                    </footer>
                </div>
            ) :
                (
                    <div className={styles.challengeNotActive}>
                        <strong> Finalize um ciclo
                        para receber um desafio.
            </strong>
                        <p>
                            <img src="icons/level-up.svg" alt="Level Up" />
                Avance de Level completando desafios.
            </p>
                    </div>
                )}
        </div>
    )
}
