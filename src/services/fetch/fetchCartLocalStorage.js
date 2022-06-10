//@ts-check

export function getCartLocalStorage() {

    return new Promise((resolve) => {
        const cart = localStorage.getItem("cart");
        resolve(JSON.parse(cart));
    })
}

export function addToCartLocalStorage(carroNormalizado) {

    return new Promise(async (resolve) => {

        localStorage.setItem("cart", JSON.stringify(carroNormalizado));

        resolve(true);

    })
}

export function removeItemCartLocalStorage(cart) {

    return new Promise(async (resolve) => {

        localStorage.setItem("cart", JSON.stringify(cart));

        resolve(true);

    })
}


export function clearCartLocalStorage() {

    return new Promise(async (resolve) => {

        const emptyArray = [];

        localStorage.setItem("cart", JSON.stringify(emptyArray));

        resolve(true);

    })
}
