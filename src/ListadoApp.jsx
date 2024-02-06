import React from 'react'
import { useState } from 'react'
import { AgregarTarea } from './assets/AgregarTarea'

const Items = ({nombre, visto}) => {
    return(
        <li>{nombre}{visto && '✅'}</li>
    )
}

export const ListadoApp = () => {
  const addTask = () => {
    setArreglo([...arreglo, {nombre:'nuevo', visto: false}])
  }
  let listadoSecciones = [
    {id: 1, nombre:'Instalaciones necesarias', visto:true },
    {id: 2, nombre:'Instalaciones necesarias', visto:true },
    {id: 3, nombre:'Uso de Vite', visto:true },
    {id: 4, nombre:'Componentes', visto:true },
    {id: 5, nombre:'Variables en JSX', visto:true },
    {id: 6, nombre:'Props', visto:false },
    {id: 7, nombre:'Eventos', visto:false },
  ]
  const [arreglo, setArreglo] = useState(listadoSecciones)

  const onAgregarTarea = (val) => {
    if(val < 1) return
    const envio = {
      id: arreglo.length + 1,
      nombre: val,
      visto: false
    }

    setArreglo([...arreglo,envio])

  }
  return (
    <>
      <h1>Listado de tareas</h1>
      <AgregarTarea agregarTarea = {onAgregarTarea}></AgregarTarea>
      <ol>
          {arreglo.map(item => <Items key={item.id} nombre={item.nombre} visto={item.visto}></Items>)}
      </ol>
    </>
  )
}
 