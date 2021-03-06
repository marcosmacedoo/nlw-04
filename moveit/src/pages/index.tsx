import React from 'react'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { CompletedChallenges } from '../components/CompletedChallenges'
import { Countdown } from '../components/Countdown'
import ExperienceBar from '../components/ExperienceBar'
import { Profile } from '../components/Profile'
import { Container } from '../styles/GlobalStyle'
import { Section, LeftContainer } from '../styles/pages/Home'
import ChallengeBox from '../components/ChallengeBox'
import { CountdownProvider } from '../contexts/CountdownContext'
import { ChallengesProvider } from '../contexts/ChallengesContexts'
import HomeProps from '../types/HomeProps'

export default function Home(props: HomeProps) {
  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
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
    </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async context => {
  const { level, currentExperience, challengesCompleted } = context.req.cookies

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}
