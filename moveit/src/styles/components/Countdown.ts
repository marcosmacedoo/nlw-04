import styled from 'styled-components'

export const Container = styled.div`
  height: 9rem;
  width: 100%;
  display: flex;
  align-items: center;
  font-weight: 600;
  font-family: 'Rajdhani', sans-serif;
  color: var(--title);

  & > span {
    font-size: 6.25rem;
    margin: 0 0.5rem;
  }
`

export const Group = styled.div`
  flex: 1;
  background: var(--white);
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  box-shadow: 0px 0px 60px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  font-size: 7.5rem;
  text-align: center;

  span {
    flex: 1;
  }

  span:first-child {
    border-right: 1px solid #f0f1f3;
  }
`

export const Button = styled.button`
  width: 100%;
  height: 5rem;
  margin-top: 2rem;
  border-radius: 5px;
  background: var(--blue);
  color: var(--white);
  font-size: 1.25rem;
  font-weight: 600;
  transition: background-color 0.3s linear;

  &:hover {
    background: var(--blue-dark);
  }
`
