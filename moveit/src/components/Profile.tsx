import React from 'react'
import {
  Container,
  Img,
  Group,
  Name,
  LevelImg
} from '../styles/components/Profile'

export function Profile() {
  return (
    <Container>
      <Img src="https://github.com/marcosmacedoo.png" alt="Marcos Macedo" />
      <Group>
        <Name>Marcos Macedo</Name>
        <p>
          <LevelImg src="icons/level.svg" alt="Level" />
          Level 1
        </p>
      </Group>
    </Container>
  )
}
