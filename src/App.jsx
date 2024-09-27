import styled from "styled-components"
import Home from "./Pages/Home/home"
import FormulaE from "./Pages/OQueFormulaE/FormulaE"
import Season11 from "./Pages/Season11/season11"

export const AppContainer = styled.div`
  margin: 0;
  padding: 0;
  max-width:100%;
  overflow-x:hidden;
`


function App() {  
  return (
    <AppContainer>
      <Home/>
    </AppContainer>
  )
}

export default App
