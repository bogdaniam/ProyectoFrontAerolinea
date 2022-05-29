window.onload = () => {
    var log = JSON.parse(localStorage.sesionLogin).login;
    console.log(JSON.parse(localStorage.sesionLogin).user)


    if (log) {
        let UsuarioLogeado = (JSON.parse(localStorage[`${JSON.parse(localStorage.sesionLogin).user}`]))
        document.getElementById("nameD").style.display = "block";
        document.getElementById("disconnectD").style.display = "block";
        document.getElementById("connectD").style.display = "none"
        document.getElementById("registerD").style.display = "none"
        document.getElementById("contactD").style.display = "none"
        document.getElementById('nameD').innerHTML = `Bienvenido ${UsuarioLogeado.nombre}`
    } else {
        document.getElementById("nameD").style.display = "none";
        document.getElementById("disconnectD").style.display = "none";
        document.getElementById("connectD").style.display = "block"
        document.getElementById("registerD").style.display = "block"
        document.getElementById("contactD").style.display = "block"


        //document.getElementById('navSinLoginD').style.visibility = "visible";
        //document.getElementById('navConLoginD').style.visibility = "hidden"
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
            if ((JSON.parse(localStorage.getItem(`${key}`)).password) == passwordLoginM) {
                console.log("contraseña ok")
                localStorage.setItem('sesionLogin', JSON.stringify({
                    login: true,
                    user: `${key}`,

                }))

                window.location.assign("http://127.0.0.1:5500/Compra/compra.html")
            } else {
                console.log("contrasena invalida")
            }
            encontradoM = true;
            contadorWhileM = 0;
            console.log("Email encontrado")
        }
        contadorWhileM++;
    }

    if (!encontradoM) {
        console.log("Usuario no registrado")
    }
}

function desconectarD() {
    localStorage.setItem('sesionLogin', JSON.stringify({
        login: false,
        user: `desconectadoD`,

    }))
}


const asientos = [];
function colorear(boton) {
    let contLocStor = 0;
    let encontrado = false;

    while ((contLocStor != asientos.length) && (!encontrado)) {


        if ((asientos[contLocStor] == (`${boton.innerHTML}`))) {
            asientos.splice(contLocStor, 1);
            boton.style.backgroundColor = "green"
            encontrado = true;
        }
        contLocStor++;
    }
    if (!encontrado) {
        asientos.push(`${boton.innerHTML}`)
        boton.style.backgroundColor = "red";
    }
    console.log(asientos)
}





/*
let origen = document.getElementById("ida").value;
origen.addEventListener("change", function () {
    let fechaIda = document.getElementById("ida").value
    let fechaVuelta = document.getElementById("vuelta");
    fechaVuelta.setAttribute("min", `${fechaIda}`); 
});*/



document.getElementById("ida").addEventListener("change", () => {
    function myFunction() {
        let fechaIda = document.getElementById("ida").value
        let fechaVuelta = document.getElementById("vuelta");
        fechaVuelta.setAttribute("min", `${fechaIda}`);
    }
    myFunction();
});




function compra() {
    let salida = document.getElementById("salida").value
    let destino = document.getElementById("destino").value
    //console.log(salida)
    //console.log(destino)
    let ida = document.getElementById("ida").value
    let vuelta = document.getElementById("vuelta").value
    //console.log(ida)
    //console.log(vuelta)
    /*
        localStorage.setItem('Historial', JSON.stringify([{
            user: JSON.parse(localStorage.sesionLogin).user,
            origen: document.getElementById("salida").value,
            destino: document.getElementById("destino").value,
            fechaIda: document.getElementById("ida").value,
            fechaVuelta: document.getElementById("vuelta").value,
            asientos: asientos,
            precio: 100,
        }]));
    */


        
    //Para guardar en el historial, hay que implementar el codigo en la pagina de pago, si los datos de la tarjetas son validos
    /*
    let historialNewM = {
        user: JSON.parse(localStorage.sesionLogin).user,
        origen: document.getElementById("salida").value,
        destino: document.getElementById("destino").value,
        fechaIda: document.getElementById("ida").value,
        fechaVuelta: document.getElementById("vuelta").value,
        asientos: asientos,
        precio: Number(80 * asientos.length),
    };

    if (!localStorage.Historial) {
        localStorage.setItem('Historial', JSON.stringify([{
            user: "",
            origen: "",
            destino: "",
            fechaIda: "",
            fechaVuelta: "",
            asientos: "",
            precio: "",
        }]));
    }

    let historial = JSON.parse(localStorage.getItem(`Historial`))
    historial.push(historialNewM)
    localStorage.setItem('Historial', JSON.stringify(historial));
    location.reload();
    */



    //Implementar solo en la pagina de compra
    //Guardar los datos en una key provisiolan, para que luego la pagina de pago tenga acceso a estos datos

    let historialProvisionalM = {
        user: JSON.parse(localStorage.sesionLogin).user,
        origen: document.getElementById("salida").value,
        destino: document.getElementById("destino").value,
        fechaIda: document.getElementById("ida").value,
        fechaVuelta: document.getElementById("vuelta").value,
        asientos: asientos,
        precio: Number(80 * asientos.length),
    };
    localStorage.setItem('HistorialProvisionalM', JSON.stringify(historialProvisionalM));
    location.reload();





}


