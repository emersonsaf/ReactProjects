import { useState } from 'react';
import styles from '../styles/components/ChallengeBox.module.css'

export default function ChallengeBox() {
    const [hasChallenge, sethasChallenge] = useState(true);

    return (
        <div className={styles.challengeBoxContainer}>
            { hasChallenge ? (
                <div className={styles.challengeActive}>
                    <header>Ganhe 400xp</header>
                    <main>
                        <img src="icons/body.svg" />
                        <strong>
                            <p>Levante e faça uma caminhada de 3 minutos</p>
                        </strong>
                    </main>
                    <footer>
                        <button type="button"
                            className={styles.challengeFailButton}
                        >
                            Falhei</button>
                        <button type="button"
                            className={styles.challengeSucceededButton}
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
