import React, { useContext } from 'react'

import { CartContext } from "../../contexts/CartContext/CartContext";

import Cart from '../../components/Cart/Cart';
import EmptyCart from "../../components/emptyCar/EmptyCart"

function CartPage() {
    const { cart } = useContext(CartContext);

    return (
        cart.length > 0
        ? <Cart/>  
        : <EmptyCart/>
    );
}

export default CartPage