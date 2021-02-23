import React from 'react'
import { Container, TextXP, Progress } from '../styles/components/ExperienceBar'

export default function ExperienceBar() {
  return (
    <Container>
      <TextXP>0 xp</TextXP>
      <Progress />
      <TextXP>600 xp</TextXP>
    </Container>
  )
}