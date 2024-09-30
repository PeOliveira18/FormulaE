import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import FormulaE from './Pages/OQueFormulaE/FormulaE.jsx'
import Home from './Pages/Home/home.jsx'
import Season11 from './Pages/Season11/season11.jsx'
import Corridas from './Pages/ProximasCorridas/corridas.jsx'
import Pilotos from './Pages/Pilotos/pilotos.jsx'
import Pistas from './Pages/Pistas/pistas.jsx'
import Historia from './Pages/Historia/historia.jsx'
import Login from './Pages/Login/login.jsx'
import Registro from './Pages/Registro/registro.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: 'OQueFormulaE',
    element: <FormulaE/>
  },
  {
    path: 'Home',
    element: <Home/>
  },
  {
    path: 'Season11',
    element: <Season11/>
  },
  {
    path: 'ProximasCorridas',
    element: <Corridas/>
  },
  {
    path: 'Pilotos',
    element: <Pilotos/>
  },
  {
    path: 'Pistas',
    element: <Pistas/>
  },
  {
    path: 'Historia',
    element: <Historia/>
  },
  {
    path: 'Login',
    element: <Login/>
  },
  {
    path: 'Registro',
    element: <Registro/>
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
