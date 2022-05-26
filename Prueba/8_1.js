let contador = 0;
function guardar() {
    contador++;
    localStorage.setItem(`user_${contador}`, JSON.stringify({
        nombre: document.getElementById("nombre").value,
        email: document.getElementById("email").value,
        mensaje: document.getElementById("mensaje").value
    }));

    document.getElementById("datos").innerText = (`Hola, mi nombre es ${(JSON.parse(localStorage.getItem(`user_${contador}`)).nombre)}, tengo el siguente correo electronico ${(JSON.parse(localStorage.getItem(`user_${contador}`)).email)} y os envio el siguente mensaje ${(JSON.parse(localStorage.getItem(`user_${contador}`)).mensaje)}`)
    document.getElementById("numeroUsuarios").innerText = (`Actualmente hay ${localStorage.length} usuarios registrados`)
}

function borrarTodo() {
    localStorage.clear();
    contador = 0;
    document.getElementById("numeroUsuarios").innerText = (`Actualmente hay  ${localStorage.length} usuarios registrados`)
}

function borrar() {
    let emailBorrar = document.getElementById("buscar").value;

    let encontrado = false;
    let contadorWhile = 0;
    while ((!encontrado) && (contadorWhile < localStorage.length)) {
        let key = localStorage.key(contadorWhile);
        if ((JSON.parse(localStorage.getItem(`${key}`)).email) == emailBorrar) {
            localStorage.removeItem(key);
            encontrado = true;
            contadorWhile = 0;
            console.log("Encontrado")
        }
        contadorWhile++;
    }
    /*
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);

        //console.log(JSON.parse(localStorage.getItem(`${key}`)).email)
        if ((JSON.parse(localStorage.getItem(`${key}`)).email) == emailBorrar) {
            localStorage.removeItem(key);
            //contador--;
        }
    }
    */
    document.getElementById("numeroUsuarios").innerText = (`Actualmente hay  ${localStorage.length} usuarios registrados`)
}
