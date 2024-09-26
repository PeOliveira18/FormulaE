import styled from "styled-components"
import Hero from "./Components/Hero/hero"
import DentroNovidades from "./Components/DentroNovidades/dentroNovidades"
import Footer from "./Components/Footer/footer"
import Ancoragem from "./Components/Ancoragem/ancoragem"
import Header from "./Components/Header2/header"
import Banner from "./Components/BannerCalendario/banner"

const AppContainer = styled.div`
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
      <Banner/>
      <DentroNovidades/>
      <Footer/>
    </AppContainer>
  )
}

export default App
