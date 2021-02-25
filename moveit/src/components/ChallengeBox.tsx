import React, { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContexts'
import {
  Container,
  ChallengeIsNotActive,
  ChallengeActive,
  Button
} from '../styles/components/ChallengeBox'

export default function ChallengeBox() {
  const { activeChallenge, resetChallenge } = useContext(ChallengesContext)

  return (
    <Container>
      {activeChallenge ? (
        <ChallengeActive>
          <header>Ganhe {activeChallenge.amount} xp</header>

          <main>
            <img
              src={`icons/${activeChallenge.type}.svg`}
              alt={activeChallenge.type}
            />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <Button type="button" onClick={resetChallenge}>
              Falhei
            </Button>
            <Button type="button" isSucceededButton>
              Completei
            </Button>
          </footer>
        </ChallengeActive>
      ) : (
        <ChallengeIsNotActive>
          <strong>Finalize um ciclo para receber um desafio</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level Up" />
            Avance de level complentando os desafios.
          </p>
        </ChallengeIsNotActive>
      )}
    </Container>
  )
}
