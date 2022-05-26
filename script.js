
window.onload = () => {
    var user = JSON.parse(localStorage.getItem('sesionLogin'));
    var test = JSON.parse(localStorage.getItem('user_2'))
    if(user){
        document.getElementById('navSinLoginD').style.display = "none";
        document.getElementById('navConLoginD').style.display = "inline"
        document.getElementById('nameD').innerHTML = `Bienvenido ${test.nombre}`
    } else {
        document.getElementById('navSinLoginD').style.display = "inline";
        document.getElementById('navConLoginD').style.display = "none"
    }
}

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
                localStorage.setItem('sesionLogin', 'true')
                window.location.assign("http://127.0.0.1:5500/ProyectoFrontAerolinea/Compra/compra.html")
            } else {
                console.log("contrasena invalida")
            }
            encontradoM = true;
            contadorWhileM = 0;
            console.log("Email encontrado")
        }
        contadorWhileM++;
    }   
    
    if(!encontradoM) {
        console.log("Usuario no registrado")
    }
}

function desconectarD (){
    localStorage.setItem('sesionLogin', 'false')
}


