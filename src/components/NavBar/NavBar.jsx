import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import ListaNav from '../ListaNav/ListaNav';
import Logo from '../Logo/Logo';
import './NavBar.css';
import CATEGORIES from "../../services/categorias.json";

const categorias = CATEGORIES.categorias;

const NavBar = () => (
    <Link to={"/"} style={{ textDecoration: 'none' }}>
        <section className="contenedor">
            <nav className="nav">
                <Logo />

                <ListaNav categorias={categorias} />

                <CartWidget />

            </nav>
        </section>
    </Link>
);

export default NavBar