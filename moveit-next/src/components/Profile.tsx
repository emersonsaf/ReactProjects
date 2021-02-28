import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/Profile.module.css'

export default function Profile() {
    const {level} = useContext(ChallengeContext);
    return(
        <div className={styles.profileContainer}> 
            <img src="https://avatars.githubusercontent.com/u/78360961?s=60&v=4" alt="Emerson Filho" />
            <div>
                <strong>Emerson Filho</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level {level}
                </p>
            </div>
        </div>
    )
}