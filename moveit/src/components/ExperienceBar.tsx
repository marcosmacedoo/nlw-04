import React, { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContexts'
import { Container, TextXP, Progress } from '../styles/components/ExperienceBar'

function ExperienceBar() {
  const { currentExperience, experienceToNextLevel } = useContext(
    ChallengesContext
  )
  const percentToNextLevel =
    Math.round(currentExperience * 100) / experienceToNextLevel
  return (
    <Container>
      <TextXP>0 xp</TextXP>
      <Progress
        currentExperience={currentExperience}
        percentToNextLevel={percentToNextLevel}
      />
      <TextXP>{experienceToNextLevel} xp</TextXP>
    </Container>
  )
}

export default ExperienceBar
