import { useEffect, useState } from "react"
import axios from 'axios'
import AlbumCard from "../components/AlbumCard"
function Listado (){
    const [albumes, setAlbumes] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:3000/album/albumes")
        .then((respuesta)=>{
            setAlbumes(respuesta.data)
        })
        .catch((error)=>{
            alert("No se pudo conectar con la API")
        })
    },[])

    return(
        <div className="listado">
            <h1>Lista de albumes</h1>
            <div className="contenedor-listado">
            {albumes.map((album)=>(
                <AlbumCard key={album.ID} album={album} />
            ))}
            </div>
        </div>
    )
}
export default Listado