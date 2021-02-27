import { useState } from 'react';
import style from '../styles/components/ChallengeBox.module.css'

export default function ChallengeBox() {
    const [challengeNotActive, setChallengeNotActive] = useState(true);

    return (
        <div className={style.challengeBoxContainer}>
            <div className={style.challengeNotActive}>
                <strong> Finalize um ciclo
                para receber um desafio.
            </strong>
                <p>
                    <img src="icons/level-up.sgv" alt="Level Up" />
                Avance de Level completando desafios.
            </p>
            </div>
        </div>
    )
}
