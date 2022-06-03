import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import ListaNav from '../ListaNav/ListaNav';
import Logo from '../Logo/Logo';
import './NavBar.css';
import { fetchCategories } from "../../services/fetch/fetchCategories.js"


function NavBar() {

    const [categories, setCategories] = useState([]);

    useEffect(() => {

        function fetchCategorias() {
            const categoriesPromise = fetchCategories();

            categoriesPromise
                .then((resultado) => {
                    if (Array.isArray(resultado)) {
                        setCategories(resultado)
                    } else {
                        throw new Error("Problema con el tipo de elemento");
                    }
                })
                .catch((error) => {
                    console.log(error);
                })
        }

        fetchCategorias();

    }, []);


    return (
        <Link to={"/"} style={{ textDecoration: 'none' }}>
            <section className="contenedor">
                <nav className="nav">
                    <Logo />

                    <ListaNav categorias={categories} />

                    <Link to={`/cart/`} style={{ textDecoration: 'none' }}>
                        <CartWidget />
                    </Link>
                </nav>
            </section>
        </Link>
    )
}






export default NavBar