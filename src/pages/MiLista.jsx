import { useContext } from "react"
import { FavoritosContext } from "../context/FavoritosContext"

function MiLista() {
  const { favoritos } = useContext(FavoritosContext)

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