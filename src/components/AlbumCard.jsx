import {Link} from 'react-router-dom'

function AlbumCard ({album}){

return(
    <div className='card'>
        
        <span>{album.nombre}</span>
        <Link to={`/detalle/${album.ID}`} className='link'>Ver más</Link>
        
    </div>
)
}

export default AlbumCard