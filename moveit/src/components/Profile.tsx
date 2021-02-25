import React, { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContexts'
import {
  Container,
  Img,
  Group,
  Name,
  LevelImg
} from '../styles/components/Profile'

export function Profile() {
  const { level } = useContext(ChallengesContext)
  return (
    <Container>
      <Img src="https://github.com/marcosmacedoo.png" alt="Marcos Macedo" />
      <Group>
        <Name>Marcos Macedo</Name>
        <p>
          <LevelImg src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </Group>
    </Container>
  )
}
