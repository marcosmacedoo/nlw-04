import React, { useState, useEffect, useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContexts'
import { Button, Container, Group } from '../styles/components/Countdown'

let countdownTimeout: NodeJS.Timeout

export function Countdown() {
  const { startNewChallenge } = useContext(ChallengesContext)

  const [time, setTime] = useState(0.1 * 60)
  const [isActive, setIsActive] = useState(false)
  const [hasFinished, setHasFinished] = useState(false)

  const minutes = Math.floor(time / 60)
  const seconds = time % 60

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

  function startCountdown() {
    setIsActive(true)
  }

  function resetCountdown() {
    clearTimeout(countdownTimeout)
    setIsActive(false)
    setTime(0.1 * 60)
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1)
      }, 1000)
    } else if (isActive && time === 0) {
      setHasFinished(true)
      setIsActive(false)
      startNewChallenge()
    }
  }, [isActive, time])

  return (
    <div>
      <Container>
        <Group>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </Group>
        <span>:</span>
        <Group>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </Group>
      </Container>

      {hasFinished ? (
        <Button disabled>Ciclo encerrado</Button>
      ) : (
        <>
          {isActive ? (
            <Button type="button" isActiveButton onClick={resetCountdown}>
              Abandonar o ciclo
            </Button>
          ) : (
            <Button type="button" onClick={startCountdown}>
              Iniciar um ciclo
            </Button>
          )}
        </>
      )}
    </div>
  )
}
