import {Link} from 'react-router-dom'

function Navbar(){
    return (
        <nav className='navbar'>
            <Link to="/" className='link'>Inicio</Link>
            <Link to="/listado" className='link'>Listado</Link>
        </nav>
    )
}

export default Navbar