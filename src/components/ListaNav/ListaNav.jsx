import React from 'react'
import { NavLink } from 'react-router-dom'
import './listaNav.css'

const ListaNav = ({ categorias }) => {
    
    return (
        <ul className="content_nav">
            {categorias.map((categoria) => (
                <li key={categoria}>
                    <NavLink to={`/category/${categoria}`}>{categoria}</NavLink>
                </li>
            ))}
        </ul>

    )
}

export default ListaNav