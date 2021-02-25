import styles from '../styles/components/CompletedChallenge.module.css'

export default function CompletedChallenge() {
    return(
        <div className={styles.completedChalengeContainer}>
            <span>Desafios Completos</span>
            <span>5</span>
        </div>
    );
}