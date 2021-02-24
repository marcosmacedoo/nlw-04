import React, { useState, useEffect } from 'react'
import { Button, Container, Group } from '../styles/components/Countdown'

export function Countdown() {
  const [time, setTime] = useState(20 * 60)
  const [active, setActive] = useState(false)

  const minutes = Math.floor(time / 60)
  const seconds = time % 60

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

  function startCountdown() {
    setActive(true)
  }

  useEffect(() => {
    if (active && time > 0) {
      setTimeout(() => {
        setTime(time - 1)
      }, 1000)
    }
  }, [active, time])

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

      <Button type="button" onClick={startCountdown}>
        Iniciar um ciclo
      </Button>
    </div>
  )
}
