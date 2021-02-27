import React, { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContexts'
import {
  Container,
  Overlay,
  Header,
  Title,
  Subtitle,
  Button
} from '../styles/components/LevelUpModal'

export function LevelUpModal() {
  const { level, closeLevelUpModal } = useContext(ChallengesContext)

  return (
    <Overlay>
      <Container>
        <Header>{level}</Header>

        <Title>Parabéns</Title>
        <Subtitle>Você alcançou um novo level</Subtitle>

        <Button type="button" onClick={closeLevelUpModal}>
          <img src="/icons/close.svg" alt="Fechar modal" />
        </Button>
      </Container>
    </Overlay>
  )
}
