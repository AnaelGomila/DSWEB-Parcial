import { useState, useEffect } from "react"

function AlbumForm({initialData, onSubmit}) {
    const [form, setForm] = useState(initialData || {
        nombre: "",
        cantante: "",
        compositor: "",
        cantidad_canciones: "",
        total_minutos: "",
        genero: "",
        total_grammys: "",
        single: "",
        año: ""
    })

    useEffect(() => {
        if (initialData) {
            setForm(initialData)
        }
    }, [initialData])

    const handleChange = (e) =>{
        setForm({ ...form, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit(form)
    }

    return (
    
    <form onSubmit={handleSubmit} className="form">
        <input name="nombre" value={form.nombre} onChange={handleChange} placeholder="Nombre"/>
        <input name="cantante" value={form.cantante} onChange={handleChange} placeholder="Cantante"/>
        <input name="compositor" value={form.compositor} onChange={handleChange} placeholder="Compositor/es"/>
        <input name="cantidad_canciones" value={form.cantidad_canciones} onChange={handleChange} placeholder="Cantidad de canciones"/>
        <input name="total_minutos" value={form.total_minutos} onChange={handleChange} placeholder="Total de minutos"/>
        <input name="genero" value={form.genero} onChange={handleChange} placeholder="Genero"/>
        <input name="total_grammys" value={form.total_grammys} onChange={handleChange} placeholder="Total de grammys"/>
        <input name="single" value={form.single} onChange={handleChange} placeholder="Single"/>
        <input name="año" value={form.año} onChange={handleChange} placeholder="Año"/>
        <button type="submit">Guardar</button>
    </form>
    
)
}

export default AlbumForm