import styled from 'styled-components'
import ExperienceBarProps from '../../types/ExperienceBarProps'

export const Container = styled.header`
  display: flex;
  align-items: center;
`

export const TextXP = styled.span`
  font-size: 0.875rem;
`

export const Progress = styled.div<ExperienceBarProps>`
  height: 4px;
  flex: 1;
  margin: 0 1.5rem;
  border-radius: 5px;
  background: var(--gray-line);
  position: relative;

  &::after {
    content: '';
    position: absolute;
    width: ${props => (props.currentXP * 100) / props.finalXP}%;
    height: 100%;
    background: var(--green);
    border-radius: 5px;
  }

  &::before {
    content: '${props => props.currentXP} xp';
    position: absolute;
    top: 12px;
    left: ${props => (props.currentXP * 100) / props.finalXP}%;
    transform: translateX(-50%);
  }
`
