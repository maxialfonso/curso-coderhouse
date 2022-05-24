import React from 'react'
import { Link } from 'react-router-dom'
import "./Error404.css"

function Error404() {
    return (
        <div className="error-container">
            <h1>404</h1>
            <Link className='return' to={"/"} style={{ textDecoration: 'none' }}> Regresar </Link>
        </div>
    )
}

export default Error404