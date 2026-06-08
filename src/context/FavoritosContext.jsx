import { createContext, useState } from "react"

export const FavoritosContext = createContext()

function FavoritosProvider({ children }) {
  const [favoritos, setFavoritos] = useState([])

  const agregarFavorito = (elemento) => {
    setFavoritos([...favoritos, elemento])
  }

  const quitarFavorito = (id) => {
    setFavoritos(favoritos.filter((fav) => fav.ID !== id))
  }

  return (
    <FavoritosContext.Provider value={{ favoritos, agregarFavorito, quitarFavorito }}>
      {children}
    </FavoritosContext.Provider>
  )
}

export default FavoritosProvider