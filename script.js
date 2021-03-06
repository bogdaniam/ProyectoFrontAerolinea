window.onload = () => {

    //si la key sesionLogin no existe, se ocultan elementos de nav
    const sesionOnLoad = localStorage.getItem('sesionLogin');
    if (!sesionOnLoad) {
        console.log('sesionLogin no existe');
        document.getElementById("nameD").style.display = "none";
        document.getElementById("disconnectD").style.display = "none";
        document.getElementById("connectD").style.display = "block"
        document.getElementById("registerD").style.display = "block"
        document.getElementById("contactD").style.display = "block"
        document.getElementById("historialS").style.display = "none"
    }




    var log = JSON.parse(localStorage.sesionLogin).login;
    //console.log(JSON.parse(localStorage.sesionLogin).user)
    setTimeout(historyM, 200);
    //console.log(log)






    //Cambia los elementos del NAV, dependiendo si el usuario esta logeado o no
    if (log) {
        let nombreUsuarioCompleto = (JSON.parse(localStorage[`${JSON.parse(localStorage.sesionLogin).user}`]))
        let UsuarioLogeadoM = nombreUsuarioCompleto.nombre.split(' ')
        console.log(UsuarioLogeadoM)
        //let UsuarioLogeado = (JSON.parse(localStorage[`${JSON.parse(localStorage.sesionLogin).user}`]))
        document.getElementById("historialS").style.display = "block"
        document.getElementById("nameD").style.display = "block";
        document.getElementById("disconnectD").style.display = "block";
        document.getElementById("connectD").style.display = "none"
        document.getElementById("registerD").style.display = "none"
        document.getElementById("contactD").style.display = "none"
        document.getElementById('nameD').innerHTML = `Bienvenido ${UsuarioLogeadoM[0]}`


    } else {
        document.getElementById("nameD").style.display = "none";
        document.getElementById("disconnectD").style.display = "none";
        document.getElementById("connectD").style.display = "block"
        document.getElementById("registerD").style.display = "block"
        document.getElementById("contactD").style.display = "block"
        document.getElementById("historialS").style.display = "none"


        //document.getElementById('navSinLoginD').style.visibility = "visible";
        //document.getElementById('navConLoginD').style.visibility = "hidden"

    }



    //En la pagina de pago, se van a rellenar los campor origen, destino...
    document.getElementById("origenReserva").innerHTML = (JSON.parse(localStorage.HistorialProvisionalM).origen);
    document.getElementById("destinoReserva").innerHTML = (JSON.parse(localStorage.HistorialProvisionalM).destino);
    document.getElementById("fechaIdaReserva").innerHTML = (JSON.parse(localStorage.HistorialProvisionalM).fechaIda);
    document.getElementById("fechaVueltaReserva").innerHTML = (JSON.parse(localStorage.HistorialProvisionalM).fechaVuelta);
    document.getElementById("asientosReserva").innerHTML = (JSON.parse(localStorage.HistorialProvisionalM).asientos);
    document.getElementById("precioReserva").innerHTML = (JSON.parse(localStorage.HistorialProvisionalM).precio);

    setTimeout(historyM, 500);



}






//Nos registra los usuarios en localstorage (pagina registro)
const contadorUsuarios = localStorage.getItem('contadorUsuarios');
if (!contadorUsuarios) {
    localStorage.setItem("contadorUsuarios", JSON.stringify(
        0))
}



function guardarM() {

    

    const nombreRegistroNameS = document.getElementById('nombreRegistroS').value;
    const DNIRegistroS = document.getElementById('DNIRegistroS').value;
    const telefonoRegistroS = document.getElementById('telefoRegistroS').value;
    const emailRegistroS = document.getElementById('emailRegistroS').value;
    const passwordRegsitroS = document.getElementById('paswwordRegistroS').value;


    const mensajeErrorS = document.getElementById('mensajeErrorS');
    const crearNodoS = document.createElement('h3');
    const crearTextoS = document.createTextNode('Datos incorrectos introducir de nuevo.');



    if (nombreRegistroNameS.match(/^([a-zA-Z]{2,}\s[a-zA-z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)$/)
        && (DNIRegistroS.match(/^\d{8}[TRWAGMYFPDXBNJZSQVHLCKET]$/))
        && (telefonoRegistroS.match(/[0-9]{9}/))
        && (emailRegistroS.match(/^[a-zA-Z0-9_\-\.~]{2,}@[a-zA-Z0-9_\-\.~]{2,}\.[a-zA-Z]{2,4}$/))
        && (passwordRegsitroS.match(/(?=^.{6,}$)((?=.*\d)(?=.*[A-Z])(?=.*[a-z])|(?=.*\d)(?=.*[^A-Za-z0-9])(?=.*[a-z])|(?=.*[^A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z])|(?=.*\d)(?=.*[A-Z])(?=.*[^A-Za-z0-9]))^.*/))) {
        console.log("Cumple las condiciones");


        let email = document.getElementById("emailRegistroS").value;
        console.log(email)

     
        let cantNum = Number(JSON.parse(localStorage.getItem(`contadorUsuarios`)))
        cantNum++;
        localStorage.setItem("contadorUsuarios", JSON.stringify(
            Number(cantNum)))


        localStorage.setItem(`user_${cantNum}`, JSON.stringify({
            email: document.getElementById("emailRegistroS").value,
            password: document.getElementById("paswwordRegistroS").value,
            nombre: document.getElementById("nombreRegistroS").value,
            dni: document.getElementById("DNIRegistroS").value,
            telefono: document.getElementById("telefoRegistroS").value
        }));

        window.location.assign("../Login/login.html");

    } else {
        crearNodoS.appendChild(crearTextoS);
        mensajeErrorS.appendChild(crearNodoS);
    }
}



//comprueba si el usuario esta registrado, y luego nos crea en local storage una key (sesionLogin), para mostrar en el nav los datos del usuario (pagina login)
function IniciarSesionM() {
    let emailLoginM = document.getElementById("emailLoginS").value;
    let passwordLoginM = document.getElementById("passwordLoginS").value;

    const emailLoginE = document.getElementById("emailLoginS");
    const passLoginE = document.getElementById("passwordLoginS");

    let encontradoM = false;
    let contadorWhileM = 0;

    while ((!encontradoM) && (contadorWhileM < localStorage.length)) {
        let key = localStorage.key(contadorWhileM);

        if ((JSON.parse(localStorage.getItem(`${key}`)).email) == emailLoginM) {
            if ((JSON.parse(localStorage.getItem(`${key}`)).password) == passwordLoginM) {
                passLoginE.style.borderColor = "blue";
                console.log("contrase??a ok")
                localStorage.setItem('sesionLogin', JSON.stringify({
                    login: true,
                    user: `${key}`,
                }))


                document.getElementById("formularioM").style.display = "none"
                document.getElementById("avisoPreloader").style.display = "inline"



                setTimeout(function () {
                    window.location.assign("../Compra/compra.html")
                }, 3.0 * 1000);
            } else {
                console.log("contrasena invalida")
            }
            encontradoM = true;
            contadorWhileM = 0;
            console.log("Email encontrado")
            emailLoginE.style.borderColor = "blue";
        }
        contadorWhileM++;

    }

    if (!encontradoM) {
        emailLoginE.style.borderColor = "red";
        passLoginE.style.borderColor = "red";
        const mensajeErrorE = document.getElementById('mensajeError');
        const crearNodoE = document.createElement('h3');
        const crearTextoE = document.createTextNode('Usuario no registrado o credenciales no v??lidas');
        crearNodoE.appendChild(crearTextoE);
        mensajeErrorE.appendChild(crearNodoE);
        console.log("Usuario no registrado")
    }


}

//nos borra el key sesionLogin, entonce vuelve a aparecer en el nav los botones por defecto 
function desconectarD() {
    localStorage.setItem('sesionLogin', JSON.stringify({
        login: false,
        user: `desconectadoD`,

    }))
}

//primero va a mirar que usuario esta logeado, despues va a buscar en local storage, en la key historial todas las compras realizadas por ese usuario
function historyM() {    //de momento funciona cuando se pulsa el boton
    var logeadoM = JSON.parse(localStorage.sesionLogin).user;
    let busquedaHistorialM = JSON.parse(localStorage.getItem("Historial"))
    let contadorBusquedaUserM = 1;
    //console.log(logeadoM)
    while (contadorBusquedaUserM < busquedaHistorialM.length) {


        if ((busquedaHistorialM[contadorBusquedaUserM].user) == logeadoM) {


            var texto = (`Origen: ${busquedaHistorialM[contadorBusquedaUserM].origen}  
            Destino: ${busquedaHistorialM[contadorBusquedaUserM].destino} 
            Fecha ida: ${busquedaHistorialM[contadorBusquedaUserM].fechaIda}    
            Fecha vuelta: ${busquedaHistorialM[contadorBusquedaUserM].fechaVuelta}  
            Asientos: ${busquedaHistorialM[contadorBusquedaUserM].asientos} 
            Precio: ${busquedaHistorialM[contadorBusquedaUserM].precio} ???`);


            //console.log(texto)
            var etiqueta = document.createElement("p");
            var contenido = document.createTextNode(texto);
            etiqueta.appendChild(contenido);
            document.getElementById("cajaGraciasM").appendChild(etiqueta);
            var saltoLineaM = document.createElement("br");
            document.getElementById("cajaGraciasM").appendChild(saltoLineaM);

        }
        contadorBusquedaUserM++;
    }
}



//En la pagina pago, hay que implementar un if para comprobar los datos de la tarjeta, si todo esta ok, se tienen que guardar los datos del key HistorialProvisionalM en la key Historial
function pagar() {
    const titularTarjeta = document.getElementById('titTarjeta').value;
    const numTarjeta = document.getElementById('numeroTarjeta').value;
    const caducidadTarjeta = document.getElementById('cadTarjeta').value;
    const cvv = document.getElementById('cvv').value;



    const mensajePago = document.getElementById('datosCredito');
    const crearNodoPago = document.createElement('h3');
    const crearTextoPagoError = document.createTextNode('Algunos datos son incorrectos');

    if (
        titularTarjeta.match(/^([a-zA-Z]{2,}\s[a-zA-z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)$/)
        &&
        numTarjeta.match(/^[0-9]{16}$/)
        &&
        caducidadTarjeta.match(/^[0-9]{2}-[0-9]{2}$/)
        &&
        cvv.match(/^[0-9]{3}$/)
    ) {
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

        //Si se cumplen las condiciones de pago, se actualiza el Historial
        let historial = JSON.parse(localStorage.getItem(`Historial`))
        let historialNewM = JSON.parse(localStorage.getItem(`HistorialProvisionalM`))
        historial.push(historialNewM)
        localStorage.setItem('Historial', JSON.stringify(historial));
        

        document.getElementById("ocultar").style.display = "none"
        document.getElementById("datosCredito").style.display = "none"
        document.getElementById("avisoPreloader").style.display = "inline"



                setTimeout(function () {
                    window.location.assign("../Historial/historial.html");
                }, 5.0 * 1000);



    } else {
        crearNodoPago.appendChild(crearTextoPagoError);
        mensajePago.appendChild(crearNodoPago);
        location.reload();
    }

};


//la utilizamos en la pagina compra a la hora de seleccionar los asientos, para guardar los asientos en local storage y ponerlos de color verde o rojo
const asientos = [];
function colorear(boton) {
    let contLocStor = 0;
    let encontrado = false;

    while ((contLocStor != asientos.length) && (!encontrado)) {


        if ((asientos[contLocStor] == (`${boton.innerHTML}`))) {
            asientos.splice(contLocStor, 1);
            boton.style.backgroundColor = "#60e550"
            encontrado = true;
        }
        contLocStor++;
    }
    if (!encontrado) {
        asientos.push(`${boton.innerHTML}`)
        boton.style.backgroundColor = "orange";
    }

    if (asientos.length > 10) {
        asientos.splice(contLocStor, 1);
        boton.style.backgroundColor = "#60e550";
        contLocStor--;

    }
    
}
let asientosReservadosM = [];
let asientosComprobarM = document.getElementsByClassName("asiento")
//pagina compra, establece el atributo min de la fecha de vuelta, segun la fecha de ida


document.getElementById("ida").addEventListener("click", () => {
    function setDate() {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0');
        var yyyy = today.getFullYear();
        today = yyyy + '-' + mm + '-' + dd;
        let fechaIdaMinM = document.getElementById("ida");
        fechaIdaMinM.setAttribute("min", `${today}`);
    }
    setDate()
});




document.getElementById("ida").addEventListener("change", () => {
    function myFunction() {
        resetearColorAsientos();

        asientosReservadosM = [];
        let fechaIda = document.getElementById("ida").value
        let fechaVuelta = document.getElementById("vuelta");
        fechaVuelta.setAttribute("min", `${fechaIda}`);
        
        let key = localStorage.Historial
        let destinoM = document.getElementById("destino").value;


        //para recorrer el Historial
        for (let i = 0; i < key.length; i++) {

            let fechaComprobacion = JSON.parse(localStorage.Historial)[i].fechaIda
            let destinoComprobacion = JSON.parse(localStorage.Historial)[i].destino



            //si la fecha seleccionada y el destino coinciden
            if ((fechaIda == fechaComprobacion) && (destinoM == destinoComprobacion)) {
                


                for (let j = 0; j < (JSON.parse(localStorage.Historial)[i].asientos).length; j++) {
                    asientosReservadosM.push(JSON.parse(localStorage.Historial)[i].asientos[j])

                }
             
            }
            console.log(asientosReservadosM)
        }



       
        console.log(asientosReservadosM)
    }

    myFunction();

});



document.getElementById("vuelta").addEventListener("change", () => {
    comprobarAsientosM()
});


//para recorrer en html los asientos

function comprobarAsientosM() {
    for (let n = 0; n < asientosReservadosM.length; n++) {
        let contAsientos = 0;
        let encontrado = false;

        while ((contAsientos <= asientosComprobarM.length) && (!encontrado)) {


            if ((asientosComprobarM[contAsientos].innerHTML) == asientosReservadosM[n]) {
                console.log("Los asientos coinciden")
                asientosComprobarM[contAsientos].style.backgroundColor = "red";
                asientosComprobarM[contAsientos].setAttribute('onclick', '#')
                encontrado = true;

            }
            contAsientos++;
        }
    }
}



//para resetear los botones si el usuario cambia de fecha
function resetearColorAsientos() {
    for (let m = 0; m < asientosComprobarM.length; m++) {
        console.log(asientosComprobarM[m].innerHTML)
        console.log(asientosComprobarM.length)
        console.log(m)
        for (let n = 0; n < asientosReservadosM.length; n++) {
            console.log(asientosReservadosM[n])
            asientosComprobarM[m].setAttribute('onclick', 'colorear(this);')
            asientosComprobarM[m].style.backgroundColor = "#60e550";
        }
    }
}

function comprobarFormularioD() {
    const nombre = document.getElementById("name")
    const apellidos = document.getElementById("lastname")
    const mail = document.getElementById("mail")
    const tel = document.getElementById("tel")

    if (nombre.value != "" && apellidos.value != "" && mail.value != "" && tel.value != "") {
        window.location.assign("../Gracias/gracias.html")
    } else {
        alert('Tienes que rellenar todos los campos')
        location.reload
    }

}




//pagina compra, 
function compra() {
    let salida = document.getElementById("salida").value
    let destino = document.getElementById("destino").value
    let ida = document.getElementById("ida").value
    let vuelta = document.getElementById("vuelta").value




    //Guardar los datos en una key provisional, para que luego la pagina de pago tenga acceso a estos datos

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
    window.location.assign("../Pago/pago.html")


}