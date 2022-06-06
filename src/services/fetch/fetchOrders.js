//@ts-check
import { collection, addDoc, getFirestore, serverTimestamp } from "firebase/firestore";
import { discountStock } from "./fetchUpdateItem";

export function newOrder(order) {

    return new Promise(async (resolve, reject) => {
        
        order.created_at = serverTimestamp();
        
        const { items } = order;
        
        const DB = getFirestore();
        const orders = collection(DB, "orders");

        addDoc(orders, order)
            .then(async ({ id }) => {
                await discountStock(items);
                resolve(id);
            })
            .catch((error) => {
                console.log(error);
                reject();
            })

    })
}

