import React, { createContext, useState } from 'react';

import { getCartLocalStorage, addToCartLocalStorage, clearCartLocalStorage, removeItemCartLocalStorage } from "../../services/fetch/fetchCartLocalStorage"

export const CartContext = createContext("");

export function HOCContext({ children }) {

    const [cart, setCart] = useState([]);


    //Funciones
    async function checkCart() {
        const cartPromise = await getCartLocalStorage();

        setCart(cartPromise);
    }

    async function clearCart() {
        await clearCartLocalStorage();
        setCart([]);
    }

    async function removeToCart(id) {
        const newCart = cart.filter(item => item.id !== id);
        
        await removeItemCartLocalStorage(newCart);
        setCart(newCart);
    }

    async function addToCart(item, cant) {
        const { id } = item;

        let carroNormalizado = [];

        const index = isInCart(id);

        if (index > -1 && cant > 0) {
            carroNormalizado = constructArray(item, cant, index);
        } else {
            carroNormalizado = constructArray(item, cant);
        }

        await addToCartLocalStorage(carroNormalizado);
        checkCart();
    }

    function getCantidadUnidadesEnCarro(index) {
        return cart.reduce((acumulador, item) => acumulador + Number(item.cantidad), 0)
    }

    function getPriceTotal() {
        return cart.reduce((acumulador, item) => acumulador + Number(item.subtotal), 0)
    }


    /*     function getCartQuantity() {
            return cart.length;
        }
    
        function getCantidadProductoEnCarro(index) {
            return cart[index].cantidad;
        } */

    /*     function getStockProducto(index) {
            return productos[index].stock
        } */

    // no tengo claro si hay que sumar a la cantidad existente o reemplazar por la que llega nueva.
    /*     function validacionInCart(index, cantidad) { 
/*     function validacionInCart(index, cantidad) { 
    /*     function validacionInCart(index, cantidad) { 
    
            if ( cantidad <= 0 ){ return 0; }
            
            const cantidadCarro = getCantidadProductoEnCarro(index);
            const stock = getStockProducto(index);
            const ingreso = cantidadCarro + cantidad;
    
            if ( ingreso > stock ){
                return stock;
            }
            if ( ingreso > 0 && ingreso <= stock ){
                return ingreso;
            }
    
            return 0;
        } */

   
    // Helpers
    function isInCart(id) {
        return cart.map(producto => producto.id).indexOf(id);
    }

    function constructArray({ id, name, url, price }, cant, index = -1) {

        let nuevoCarro = [];

        if (index > -1) {

            nuevoCarro = cart.map(producto => {

                if (producto.id === id) {
                    return {
                        ...producto,
                        cantidad: cant,
                        subtotal: (price * cant).toFixed(2)
                    }
                }

                return producto;
            });

        } else {

            nuevoCarro =
                [
                    ...cart,
                    {
                        id, name, url, price,
                        cantidad: cant,
                        subtotal: (price * cant).toFixed(2)
                    }
                ];
        }

        return nuevoCarro;
    }


    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            removeToCart,
            clearCart,
            getCantidadUnidadesEnCarro,
            getPriceTotal,
            checkCart
        }}>
            {children}
        </CartContext.Provider>
    )
}
