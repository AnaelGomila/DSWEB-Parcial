import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import FavoritosProvider from './context/FavoritosContext'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <FavoritosProvider>
        <App />
      </FavoritosProvider>
    </BrowserRouter>
  </StrictMode>,
)