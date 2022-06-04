//@ts-check
import { collection, doc, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore";

export function fetchItems({ id = "", categoryKey = "" }) {
  
    return new Promise((resolve, reject) => {

        const DB = getFirestore();

        setTimeout(() => {

            if (id !== "") {
                const document = doc(DB, "items", id);

                getDoc(document).then(async (item) => {
                    const data = await normalizeItem(item.id, item.data());
                    resolve(data);
                })
            }

            if (categoryKey !== "") {
                
                const q = query(
                    collection(DB, "items"),
                    where( "category_key", "==", categoryKey)
                );

                getDocs(q).then(async ({ docs }) => {
                    const data = await normalizeItems(docs);
                    resolve(data);
                })

            }

            const documents = collection(DB, "items");

            getDocs(documents).then(async ({ docs }) => {
                const data = await normalizeItems(docs);
                resolve(data);
            })

            // reject("Exploto todooo!");
        }, 1300)
    })
}


function normalizeItem(id, item) {
    return new Promise((resolve, reject) => {

        if (item) {
            const objeto = { id, ...item };
            resolve(objeto);
        } else {
            reject("Error en la normalización del Item...");
        }

    })
}

function normalizeItems(items) {
    return new Promise((resolve, reject) => {

        if (items.length > 0) {

            const objeto = items.map(item => {
                return { id: item.id, ...item.data() }
            });

            resolve(objeto);

        } else {
            reject("Error en la normalización los Items...")
        }

    })
}