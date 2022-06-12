import React from 'react';
import { Link } from 'react-router-dom';
import "./emptyCart.css";

function EmptyCart() {
    return (
        <div className="error-container">
            <h1 className='titulo'>Sin Items</h1>
            <p className='subtitulo'>Seleccione algun item de la tienda...</p>
            <Link className='return' to={"/tienda"} style={{ textDecoration: 'none' }}> Regresar a la tienda </Link>
        </div>
    )
}

export default EmptyCart