import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/CompletedChallenge.module.css'

export default function CompletedChallenge() {
    const {challengesCompleted} = useContext(ChallengeContext);

    return(
        <div className={styles.completedChalengeContainer}>
            <span>Desafios Completos</span>
            <span>{challengesCompleted}</span>
        </div>
    );
}