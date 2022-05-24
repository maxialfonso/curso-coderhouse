import React from 'react'
import { Link } from 'react-router-dom'
import "./error404Page.css"

function Error404Page() {
    return (
        <div className="error-container">
            <h1>404</h1>
            <Link className='return' to={"/"} style={{ textDecoration: 'none' }}> Regresar </Link>
        </div>
    )
}

export default Error404Page