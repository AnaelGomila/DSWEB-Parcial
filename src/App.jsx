import './App.css'
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Inicio from './pages/Inicio'
import Listado from './pages/Listado'
import Detalle from './pages/Detalle'


function App() {
  

  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Inicio />}></Route>
      <Route path="/listado" element={<Listado />}></Route>
      <Route path="/detalle/:id" element={<Detalle />}></Route>
    </Routes>
</>
    

  )
}

export default App
