import React from 'react';
import logo from '../../logo.svg';
import './NavBar.css';

const NavBar = () => {
    return (
        <header>
            <section className="contenedor">
                <nav className="nav">
                    <img src={logo} className="App-logo" alt="logo" />
                    <ul className="content_nav">
                        <li><a href="#">Productos</a></li>
                        <li><a href="#">Servicios</a></li>
                        <li><a href="#">Contacto</a></li>
                        <li><a href="#">Login</a></li>
                    </ul>
                </nav>
            </section>
        </header>
    )
}

export default NavBar