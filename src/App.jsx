import styled from "styled-components"
import Hero from "./Components/Hero/hero"
import DentroNovidades from "./Components/DentroNovidades/dentroNovidades"
import Footer from "./Components/Footer/footer"
import Ancoragem from "./Components/Ancoragem/ancoragem"
import Header from "./Components/Header/header"
import Venda from "./Components/VendaTickets/vendaTickets"
import SectionJogo from "./Components/SectionJogo/sectionJogo"

export const AppContainer = styled.div`
  margin: 0;
  padding: 0;
  max-width: 100%;
  overflow-x:hidden
`


function App() {  
  return (
    <AppContainer>
      <Header/>
      <Ancoragem/>
      <Hero/>
      <SectionJogo/>
      <Venda/>
      <DentroNovidades/>
      <Footer/>
    </AppContainer>
  )
}

export default App
