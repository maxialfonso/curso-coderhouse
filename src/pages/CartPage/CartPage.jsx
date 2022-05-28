import React from 'react'
import { Link } from 'react-router-dom'
import "./cartPage.css"

function CartPage() {
    return (
        <div className="error-container">
            <h1 className='titulo'>Proximamente</h1>
            <p className='subtitulo'>Contenido del Carrito...</p>
            <Link className='return' to={"/"} style={{ textDecoration: 'none' }}> Regresar a Catálogo </Link>
        </div>
    )
}

export default CartPage