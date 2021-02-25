import styled from 'styled-components'
import ChallengeBoxButtonProps from '../../types/ChallengeBoxButtonProps'

export const Container = styled.div`
  height: 100%;
  padding: 1.5rem 2rem;
  background: var(--white);
  border-radius: 5px;
  box-shadow: 0px 0px 60px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`

export const ChallengeIsNotActive = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  strong {
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.4rem;
  }

  p {
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 1.4rem;
    max-width: 70%;

    img {
      margin-bottom: 1rem;
    }
  }
`

export const ChallengeActive = styled.div`
  height: 100%;
  background: var(--white);
  box-shadow: 0px 0px 60px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;

  header {
    padding-bottom: 1.5rem;
    border-bottom: 1px solid var(--gray-line);
    color: var(--blue);
    font-size: 1.25rem;
    font-weight: 600;
  }

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    strong {
      padding: 1.5rem 0 0.5rem 0;
      font-size: 1.875rem;
      font-weight: 600;
      color: var(--title);
    }

    p {
      line-height: 1.5rem;
    }
  }

  footer {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
  }
`

export const Button = styled.button<ChallengeBoxButtonProps>`
  height: 3rem;
  border-radius: 5px;
  color: var(--white);
  text-align: center;
  font-size: 1rem;
  font-weight: 600;
  background: ${props =>
    props.isSucceededButton ? 'var(--green)' : 'var(--red)'};
  transition: filter 0.3s linear;

  &:hover {
    filter: brightness(90%);
  }
`
