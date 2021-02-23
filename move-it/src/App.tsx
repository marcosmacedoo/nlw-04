import React from 'react'
import { GlobalStyle, Container } from './styles/GlobalStyle'
import ExperienceBar from './components/ExperienceBar'

function App() {
  return (
    <Container>
      <ExperienceBar initialXP={0} currentXP={100} finalXP={600}/>
      <GlobalStyle />
    </Container>
  );
}

export default App;
