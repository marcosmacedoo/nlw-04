import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #F2F3F5;
    --text: #666666;
    --title: #2E384D;
    --white: #FFF;
    --gray-line: #DCDDE0;
    --text-highlight: #B3B9FF;
    --red: #E83F5B;
    --green: #4CD62B;
    --blue: #5965E0;
    --blue-dark: #4953B8;
    --blue-twitter: #2AA9E0;
  }

  *, *::after, *::before {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }

  body {
    min-height: 100vh;
    width: 100%;
    background: var(--background);
    color: var(--text);
  }

  button {
    cursor: pointer;
    outline: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  @media(max-width: 1024px) {
    html {
      font-size: 93.75%;
    }
  }

  @media(max-width: 768px) {
    html {
      font-size: 87.5%;
    }
  }
`

export const Container = styled.main`
  height: 100%;
  max-width: 992px;
  padding: 2.5rem 1rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`