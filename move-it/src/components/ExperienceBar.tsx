import React from 'react'
import { Container, TextXP, Progress } from '../styles/components/ExperienceBar'
import ExperienceBarProps from '../types/ExperienceBarProps'

const ExperienceBar: React.FC<ExperienceBarProps> = ({
  initialXP,
  currentXP,
  finalXP
}) => {
  return (
    <Container>
      <TextXP>{initialXP} xp</TextXP>
      <Progress initialXP={initialXP} currentXP={currentXP} finalXP={finalXP} />
      <TextXP>{finalXP} xp</TextXP>
    </Container>
  )
}

export default ExperienceBar
