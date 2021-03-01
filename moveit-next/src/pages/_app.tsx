import '../styles/global.css'

import { ChallengeContext, ChallengeProvider } from '../contexts/ChallengeContext'

function MyApp({ Component, pageProps }) {
  return (

    <ChallengeProvider >
        <Component {...pageProps} />
    </ChallengeProvider>
  )
}

export default MyApp
