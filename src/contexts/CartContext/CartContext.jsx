import React, { createContext, useState } from 'react';
import PRODUCTS from "../../services/productos.json";

export const CartContext = createContext("");


export function HOCContext({children}) {

    const productos = PRODUCTS.productos;

    const [cart, setCart] = useState([]);

    function clearCart() {
        setCart([]);
    }
    
    function getCartQuantity() {
        return cart.length;
    }
    
    function getCantidadProductoEnCarro(index) {
        return cart[index].cantidad;
    }

    function getStockProducto(index) {
        return productos[index].stock
    }

    // no tengo claro si hay que sumar a la cantidad existente o reemplazar por la que llega nueva.
    function validacionInCart(index, cantidad) { 

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
    }

    function isInCart(id) {
        return cart.map(producto => producto.id).indexOf(id); ;
    }


    function addToCart(id, cant) {
        //No se aceptan duplicados y tampoco se suma la cantidad que contenia antes. Directamente si el producto existe se reemplaza su nueva cantidad.
        const index = isInCart(id);
        debugger;

       
        if ( index > -1 ) {
    
            //const ingreso = validacionInCart(index, cant); // para cuando se valide stock

            if ( cant > 0 ){

                const nuevoCarro = cart.map( producto => {
                    if ( producto.id === id){
                        return {
                            ...producto,
                            cantidad: cant
                        }
                    }
    
                    return producto;
                });

                setCart(nuevoCarro);
            }
        } else {
            
            setCart([ ...cart, { id: id, cantidad: cant}] );

        }


    }

  return (
    <CartContext.Provider value={{
        addToCart,
        cart
    }}>
        {children}
    </CartContext.Provider>
  )
}
