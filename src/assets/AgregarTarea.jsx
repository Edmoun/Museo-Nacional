import React from 'react'
import { useState } from 'react'

export const AgregarTarea = ({agregarTarea}) => {
    const [input, setInput] = useState('')
    const onInputChange = (event) => {
      setInput(event.target.value)
    }

    const onSubmit = (event) => {
      event.preventDefault()
      agregarTarea(input)


    }

  return (
    <form onSubmit={onSubmit}>
      <input
          type='text'
          placeholder='Ingresar Tarea'
          value={input}
          onChange={onInputChange}
      />
    </form>

  )
}
