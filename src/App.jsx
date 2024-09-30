import styled from "styled-components"
import Home from "./Pages/Home/home"


export const AppContainer = styled.div`
  margin: 0;
  padding: 0;
  max-width:100%;
  overflow-x:hidden;
  font-family: "Montserrat", sans-serif;
`


function App() {  
  return (
    <AppContainer>
      <Home/>
    </AppContainer>
  )
}

export default App
