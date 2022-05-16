import React from 'react'
import './listaNav.css'

const ListaNav = ({menu}) => {

    return (
    <ul className="content_nav">
        {menu.map( ( elemento ) => ( <li><a href="#">{elemento}</a></li> ) ) }
    </ul>
    )
}

export default ListaNav