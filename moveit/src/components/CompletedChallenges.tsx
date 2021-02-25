import React, { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContexts'
import {
  Container,
  Text,
  AmountChallenges
} from '../styles/components/CompletedChallenges'

export function CompletedChallenges() {
  const { challengesCompleted } = useContext(ChallengesContext)
  return (
    <Container>
      <Text>Desafios completos</Text>
      <AmountChallenges>{challengesCompleted}</AmountChallenges>
    </Container>
  )
}
