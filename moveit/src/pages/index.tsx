import React from 'react'
import Head from 'next/head'
import { CompletedChallenges } from '../components/CompletedChallenges'
import { Countdown } from '../components/Countdown'
import ExperienceBar from '../components/ExperienceBar'
import { Profile } from '../components/Profile'
import { Container } from '../styles/GlobalStyle'
import { Section, LeftContainer } from '../styles/pages/Home'
import ChallengeBox from '../components/ChallengeBox'
import { CountdownProvider } from '../contexts/CountdownContext'

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Move It</title>
      </Head>
      <ExperienceBar />

      <CountdownProvider>
        <Section>
          <LeftContainer>
            <Profile />
            <CompletedChallenges />
            <Countdown />
          </LeftContainer>
          <ChallengeBox />
        </Section>
      </CountdownProvider>
    </Container>
  )
}
