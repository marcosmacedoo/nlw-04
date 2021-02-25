import React from 'react'
import Head from 'next/head'
import { CompletedChallenges } from '../components/CompletedChallenges'
import { Countdown } from '../components/Countdown'
import ExperienceBar from '../components/ExperienceBar'
import { Profile } from '../components/Profile'
import { Container } from '../styles/GlobalStyle'
import { Section, LeftContainer } from '../styles/pages/Home'
import ChallengeBox from '../components/ChallengeBox'

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Move It</title>
      </Head>
      <ExperienceBar initialXP={0} currentXP={100} finalXP={600} />

      <Section>
        <LeftContainer>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </LeftContainer>
        <ChallengeBox />
      </Section>
    </Container>
  )
}
