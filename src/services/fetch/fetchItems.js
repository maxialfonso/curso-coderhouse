import PRODUCTS from "../productos.json";
const productos = PRODUCTS.productos;


export function fetchItems() {
    return new Promise ( (resolve, reject) =>{
        setTimeout(() => {
            resolve(productos)
            // reject("Exploto todooo!");
        }, 2000)
    })
}