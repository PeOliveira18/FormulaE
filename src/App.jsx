import styled from "styled-components"
import Header from "./Components/Header/header"
import Hero from "./Components/Hero/hero"
import DentroNovidades from "./Components/DentroNovidades/dentroNovidades"
import Footer from "./Components/Footer/footer"

const AppContainer = styled.div`
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
`


function App() {  
  return (
    <AppContainer>
      <Header/>
      
      <DentroNovidades/>
      <Footer/>
    </AppContainer>
  )
}

export default App
