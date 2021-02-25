import React from 'react'
import { GlobalStyle } from '../styles/GlobalStyle'
import { ChallengesProvider } from '../contexts/ChallengesContexts'

function MyApp({ Component, pageProps }) {
  return (
    <ChallengesProvider>
      <Component {...pageProps} />
      <GlobalStyle />
    </ChallengesProvider>
  )
}

export default MyApp
