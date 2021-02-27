import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/ExperienceBar.module.css'

export default function ExperienceBar(){
    const { currentExperience, experienceToNextLevel } = useContext(ChallengeContext);    

    const percenteToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel

    return(
        <header className={styles.experienceBar}>
            <span>0 xp</span>
                <div>
                    <div style={{ width: `${percenteToNextLevel}%` }} />
                    <span className={styles.currentExperience} style={{ left: `${percenteToNextLevel}%` }} > {currentExperience} XP </span>
                </div>
            <span>{experienceToNextLevel}xp </span>
        </header>
    );
}