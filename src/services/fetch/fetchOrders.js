//@ts-check
import { collection, addDoc, getFirestore } from "firebase/firestore";

export function newOrder(order) {

    return new Promise(async (resolve, reject) => {

        const DB = getFirestore();

        const orders = collection(DB, "orders");

        addDoc(orders, order).then(({ id }) => {
            resolve(id);
        })

    })
}





