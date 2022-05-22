import PRODUCTS from "../productos.json";
const productos = PRODUCTS.productos;


export function fetchItems(id = false) {
    return new Promise ( (resolve, reject) =>{
        setTimeout(() => {

            if (!id){ 
                resolve(productos);
            } else {
                const item = productos.find( p => p.id === id );
                resolve(item);
            }

            // reject("Exploto todooo!");
        }, 2000)
    })
}