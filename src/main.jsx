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
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
