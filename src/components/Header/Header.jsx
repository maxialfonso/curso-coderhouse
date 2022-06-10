import React, {useEffect, useContext} from 'react'
import "./header.css"
import NavBar from '../NavBar/NavBar'
import { CartContext } from '../../contexts/CartContext/CartContext';

function Header() {

    const { checkCart } = useContext(CartContext);

    useEffect(() => {

        function consultarLocalStorage() {
            checkCart();
        }

        consultarLocalStorage();

    }, []);

    return (
        <header>
            <NavBar />
        </header>
    )
}

export default Header
