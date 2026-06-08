import { createContext, useEffect, useState } from "react"

export const FavoritosContext = createContext()

function FavoritosProvider({ children }) {
  const [favoritos, setFavoritos] = useState(() => {
    const guardado = localStorage.getItem("favoritos")
    return guardado ? JSON.parse(guardado) : []
  })

  useEffect(() => {
    localStorage.setItem("favoritos", JSON.stringify(favoritos))
  }, [favoritos])

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