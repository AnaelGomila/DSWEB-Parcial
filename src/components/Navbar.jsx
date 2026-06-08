import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { FavoritosContext } from '../context/FavoritosContext'

function Navbar() {
  const { favoritos } = useContext(FavoritosContext)

  return (
    <nav className='navbar'>
      <Link to="/" className='link'>Inicio</Link>
      <Link to="/listado" className='link'>Listado</Link>
      <Link to="/mis-favoritos" className='link'>Favoritos{favoritos.length}</Link>
    </nav>
  )
}

export default Navbar