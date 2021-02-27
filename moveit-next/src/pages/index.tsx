import Head from 'next/head';

import CompletedChallenge from '../components/CompletedChallenges'
import Countdown from '../components/Countdown'
import ExperienceBar from '../components/ExperienceBar'
import Profile from '../components/Profile'
import ChallengBox from '../components/ChallengeBox'

import styles from '../styles/pages/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title> Início | MoveIt </title>
      </Head>
      <ExperienceBar />
      <section>
        <div>
          <Profile />
          <CompletedChallenge />
          <Countdown />
        </div>
        <div>
          <ChallengBox />
        </div>
      </section>
    </div>
  )
}
