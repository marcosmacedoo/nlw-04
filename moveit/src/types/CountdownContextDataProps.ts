type CountdownContextDataProps = {
  minutes: number
  seconds: number
  hasFinished: boolean
  isActive: boolean
  resetCountdown: () => void
  startCountdown: () => void
}

export default CountdownContextDataProps
