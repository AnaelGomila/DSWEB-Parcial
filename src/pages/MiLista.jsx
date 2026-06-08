import { useContext } from "react"
import { FavoritosContext } from "../context/FavoritosContext"
import { useState } from "react"
function MiLista() {
  const { favoritos } = useContext(FavoritosContext)
  const[busqueda,setBusqueda]=useState("")
  const favoritosFiltradoss = favoritos.filter((album)=>
  album.nombre.toLowerCase().includes(busqueda.toLowerCase())
  )
  return (
    <div>
      <h1>Mis Favoritos</h1>
      {favoritos.length === 0
        ? <p>No tenés favoritos guardados</p>
        : favoritos.map((album) => (
            <div key={album.ID}>
              <p>{album.nombre} - {album.cantante}</p>
            </div>
          ))
      }
    </div>
  )
}

export default MiLista
