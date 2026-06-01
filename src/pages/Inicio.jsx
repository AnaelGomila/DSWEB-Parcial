import axios from "axios"
import AlbumForm from '../components/AlbumForm'
import { useState } from "react"
function Inicio() {
    const [formKey, setFormKey] = useState(0)
    const initialVacio = {
        nombre: "",
        cantante: "",
        compositor: "",
        cantidad_canciones: "",
        total_minutos: "",
        genero: "",
        total_grammys: "",
        single: "",
        año: ""
    }
    const handlePost = async (datos) => {
        try {
            await axios.post("http://localhost:3000/album/nuevo", datos)
            alert("Álbum creado correctamente")
            setFormKey(formKey + 1)
        } catch (error) {
            alert("Error al crear el álbum")
        }
    }
    return (
        <div className="inicio" >

            <h1>Agregar album</h1>
            <div className="contenedor-form">
                <AlbumForm key={formKey} initialData={initialVacio} onSubmit={handlePost} />
            </div>
        </div>
    )
}
export default Inicio