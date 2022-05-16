import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import ListaNav from '../ListaNav/ListaNav';
import Logo from '../Logo/Logo';
import './NavBar.css';

const menu = ["Productos", "Servicios", "Ofertas", "Ayuda"];

const NavBar = () => (
    <section className="contenedor">
        <nav className="nav">
            <Logo/>
 
            <ListaNav menu={menu}/>

            <CartWidget/>

        </nav>
    </section>
);

export default NavBar