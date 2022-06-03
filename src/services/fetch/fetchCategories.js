//@ts-check
import { collection, getDocs, getFirestore } from "firebase/firestore";

export function fetchCategories() {
    return new Promise((resolve, reject) => {

        const DB = getFirestore();

        const documents = collection(DB, "categories");

        getDocs(documents).then(async ({ docs }) => {
            const data = await normalizeCategories(docs);
            resolve(data);
        })

    })
}


function normalizeCategories(categories) {
    return new Promise((resolve, reject) => {

        if (categories.length > 0) {

            const objeto = categories.map( category => {
                return { ...category.data() }
            });
            
            resolve(objeto);

        } else {
            reject("Error en la normalización los Items...")
        }

    })
}