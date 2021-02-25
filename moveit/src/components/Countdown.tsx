import React, { useState, useEffect, useContext } from 'react'
import { Button, Container, Group } from '../styles/components/Countdown'
import { CountdownContext } from '../contexts/CountdownContext'

export function Countdown() {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    startCountdown,
    resetCountdown
  } = useContext(CountdownContext)

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

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
