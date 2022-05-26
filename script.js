//guardar contador en local storage

let contadorM = 0;
function guardarM() {
    let email = document.getElementById("emailRegistroS").value;
    console.log(email)
    contadorM++;
    localStorage.setItem(`user_${contadorM}`, JSON.stringify({
        email: document.getElementById("emailRegistroS").value,
        password: document.getElementById("paswwordRegistroS").value,
        nombre: document.getElementById("nombreRegistroS").value,
        dni: document.getElementById("DNIRegistroS").value,
        telefono: document.getElementById("teleforegistroS").value
    }));
}



function IniciarSesionM() {
    let emailLoginM = document.getElementById("emailLoginS").value;
    let passwordLoginM = document.getElementById("passwordLoginS").value;
    //console.log(emailLoginM)

    let encontradoM = false;
    let contadorWhileM = 0;

    while ((!encontradoM) && (contadorWhileM < localStorage.length)) {
        let key = localStorage.key(contadorWhileM);

        if ((JSON.parse(localStorage.getItem(`${key}`)).email) == emailLoginM) {
            if((JSON.parse(localStorage.getItem(`${key}`)).password) == passwordLoginM ) {
                console.log("contraseña ok")
            } else {
                console.log("contrasena invalida")
            }
            encontradoM = true;
            contadorWhileM = 0;
            console.log("Email encontrado")
        }  else {
            console.log("Usuario no registrado")
        } 
        contadorWhileM++;
    }   


    /*
    if(!encontradoM) {
        console.log("Usuario no registrado")
    }*/
}


