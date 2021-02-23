import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const TextXP = styled.span`
  font-size: 0.875rem;
`

export const Progress = styled.div`
  height: 4px;
  flex: 1;
  margin: 0 1.5rem;
  border-radius: 5px;
  background: var(--gray-line);
  position: relative;

  &::after {
    content: '';
    position: absolute;
    width: 50%;
    height: 100%;
    background: var(--green);
    border-radius: 5px;
  }

  &::before {
    content: '300 xp';
    position: absolute;
    top: 12px;
    left: 50%;
    transform: translateX(-50%);
  }
`