//Constantes Expresiones regulares
const expresionRegularNombre = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
const expresionRegularEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
const expresionRegularTel = /^\d{7,14}$/;

//Funciones EXPORT
export function validarInputs() {
    console.log("Montando Carro");
    validarNombreApellido();
    validarEmail();
    validarTelefono();
}

export function limpiar() {
    console.log("Desmontando Carrito")
    const nameInput = document.querySelector('#name');
    nameInput.removeEventListener("input", inputName);
    nameInput.removeEventListener("invalid", invalidName);

    const emailInput = document.querySelector('#email');
    emailInput.removeEventListener("input", inputEmail);
    emailInput.removeEventListener("invalid", invalidEmail);

    const telInput = document.querySelector('#tel');
    telInput.removeEventListener("input", inputTel);
    telInput.removeEventListener("invalid", invalidTel);

}


//Funciones Eventlisteners

function validarNombreApellido(e) {
    const nameInput = document.querySelector('#name');
    
    nameInput.addEventListener('input', inputName);
    
    nameInput.addEventListener('invalid', invalidName);
}

function validarEmail(e) {
    const emailInput = document.querySelector('#email');

    emailInput.addEventListener('input', inputEmail);

    emailInput.addEventListener('invalid', invalidEmail);
}

function validarTelefono(e) {
    const telInput = document.querySelector('#tel');

    telInput.addEventListener('input', inputTel);

    telInput.addEventListener('invalid', invalidTel);
}


// Funciones Helpers

function inputName() {
    const nameInput = document.querySelector('#name');
    const isValid = expresionRegularNombre.test(nameInput.value.trim());

    if (isValid) {
        nameInput.setCustomValidity("");
    } else {
        nameInput.setCustomValidity(" ");
    }
}

function invalidName() {
    const nameInput = document.querySelector('#name');
    if (nameInput.value === "") {
        nameInput.setCustomValidity("Campo vacío! Ingresar nombre completo.");
    } else {
        nameInput.setCustomValidity("Ingrese su nombre completo de manera correcta.");
    }

}

function inputEmail() {
    const emailInput = document.querySelector('#email');
    const isValid = expresionRegularEmail.test(emailInput.value.trim());

    if (isValid) {
        emailInput.setCustomValidity("");
    } else {
        emailInput.setCustomValidity(" ");
    }
}

function invalidEmail() {
    const emailInput = document.querySelector('#email');

    if (emailInput.value === "") {
        emailInput.setCustomValidity("Campo vacío! Ingresar un email.");
    } else {
        emailInput.setCustomValidity("Formato de email incorrecto!");
    }

}

function inputTel() {
    const telInput = document.querySelector('#tel');
    const isValid = expresionRegularTel.test(telInput.value.trim());

    if (isValid) {
        telInput.setCustomValidity("");
    } else {
        telInput.setCustomValidity(" ");
    }
}

function invalidTel() {
    const telInput = document.querySelector('#tel');

    if (telInput.value === "") {
        telInput.setCustomValidity("Campo vacío! Ingresar Teléfono.");
    } else {
        telInput.setCustomValidity("Ingrese su teléfono de manera correcta.");
    }

}





