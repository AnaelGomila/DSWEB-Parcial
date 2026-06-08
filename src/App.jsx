import './App.css'
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Inicio from './pages/Inicio'
import Listado from './pages/Listado'
import Detalle from './pages/Detalle'
import MiLista from './pages/MiLista'

function App() {
  

  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Inicio />}></Route>
      <Route path="/listado" element={<Listado />}></Route>
      <Route path="/detalle/:id" element={<Detalle />}></Route>
      <Route path="/mis-favoritos" element={<MiLista />} />
    </Routes>
</>
    

  )
}

export default App
