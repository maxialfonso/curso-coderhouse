import React from 'react'
import { Link } from 'react-router-dom'
import "./error404Page.css"

function Error404Page() {
    return (
        <div className="error-div">
            <section class="error-container">
                <span><span>4</span></span>
                <span>0</span>
                <span><span>4</span></span>
            </section>
            <Link className='return' to={"/"} style={{ textDecoration: 'none' }}> Regresar </Link>
        </div>
    )
}

export default Error404Page