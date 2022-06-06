//@ts-check
import { doc, getFirestore, updateDoc } from "firebase/firestore";
import { fetchItems } from "./fetchItems";

export function discountStock(items) {

    return new Promise(async (resolve, reject) => {

        const DB = getFirestore();

        for (const item of items) {
            
            const { stock } = await fetchItems({ id: item.id });
       
            const newStock = {
                stock: Number(stock) - Number(item.cantidad)
            }

            const documento = doc(DB, "items", item.id);

            await updateDoc(documento, newStock)
            .catch((error) => {
                reject(error);
            })  
        }

        resolve();
    })
}