import React from 'react'
import { Link } from 'react-router-dom'

export const Error404 = () => {
  return (
    <div>
        <h1>Error 404</h1>
        <p>Esta página no existe</p>
        <Link to="/inicio">Volver a la página de inicio</Link>
    </div>
  )
}
