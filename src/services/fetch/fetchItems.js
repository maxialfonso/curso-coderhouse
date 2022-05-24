import PRODUCTS from "../productos.json";
const productos = PRODUCTS.productos;


export function fetchItems({id = "", categoryName = ""}) {
    return new Promise ( (resolve, reject) =>{
        setTimeout(() => {

            if (id !== ""){ 
                const item = productos.find( p => p.id === id );
                resolve(item);
            } 
            
            if (categoryName !== ""){ 
                const productosCategoria = productos.filter( p => p.category === categoryName );
                resolve(productosCategoria);
            }
                
            resolve(productos);
            
            // reject("Exploto todooo!");
        }, 2000)
    })
}