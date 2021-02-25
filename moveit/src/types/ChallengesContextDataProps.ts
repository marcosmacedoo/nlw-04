interface Challenge {
  type: 'body' | 'eye'
  description: string
  amount: number
}

type ChallengesContextDataProps = {
  level: number
  currentExperience: number
  challengesCompleted: number
  activeChallenge: Challenge
  experienceToNextLevel: number
  levelUp: () => void
  startNewChallenge: () => void
  resetChallenge: () => void
  completeChallenge: () => void
}

export default ChallengesContextDataProps
