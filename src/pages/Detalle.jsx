import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import axios from "axios"
import AlbumForm from "../components/AlbumForm"
function Detalle() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [album, setAlbum] = useState(null)
    const [modoEditar, setModoEditar] = useState(false)

    useEffect(() => {
        axios.get(`http://localhost:3000/album/albumes/id/${id}`)
            .then((respuesta) => {
                setAlbum(respuesta.data)
            })
            .catch(() => {
                alert("Error al cargar el álbum")
            })
    }, [])

    if (!album) return <h2>Cargando datos...</h2>

    const handleEditar = () => {
        setModoEditar(true)
    }

    const handlePut = (datos) => {
  const { ID, ...datosSinID } = datos
  axios.put(`http://localhost:3000/album/actualizar/${album.ID}`, datosSinID)
    .then(() => {
      alert("Album actualizado correctamente")
      setModoEditar(false)
    })
    .catch(() => {
      alert("Error al actualizar")
    })
}

    const handleEliminar = () => {
        const confirmacion = window.confirm("¿Seguro que querés eliminar este álbum?")
        if (confirmacion) {
            axios.delete(`http://localhost:3000/album/eliminar/${album.ID}`)
                .then(() => {
                    alert("Álbum eliminado correctamente")
                    navigate("/listado")
                })
                .catch(() => {
                    alert("Error al eliminar el álbum")
                })
        }
    }
    



    return (
        <div className="detalles">
            <div className="contenedor-detalle">
            <h1>{album.nombre}</h1>
            <p><b>Cantante:</b> {album.cantante}</p>
            <p><b>Compositor:</b> {album.compositor}</p>
            <p><b>Canciones:</b> {album.cantidad_canciones}</p>
            <p><b>Minutos:</b> {album.total_minutos}</p>
            <p><b>Género:</b> {album.genero}</p>
            <p><b>Grammys:</b> {album.total_grammys}</p>
            <p><b>Single:</b> {album.single}</p>
            <p><b>Año:</b> {album.año}</p>
            <div className="btn-detalle">
            <button onClick={handleEditar}>Editar</button>
            <button onClick={handleEliminar}>Eliminar</button>
            </div>
            {modoEditar && (
                
                <AlbumForm initialData={album} onSubmit={handlePut} />
            )}
            </div>
        </div>

    )
}

export default Detalle