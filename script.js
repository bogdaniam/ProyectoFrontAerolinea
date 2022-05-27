window.onload = () => {
    var log = JSON.parse(localStorage.sesionLogin).login;
    //console.log(JSON.parse(localStorage.sesionLogin).user)


    if(log){
        let UsuarioLogeado = (JSON.parse(localStorage[`${JSON.parse(localStorage.sesionLogin).user}`]))
        document.getElementById("historialS").style.display = "block"
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
        document.getElementById("historialS").style.display = "none"


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
            if((JSON.parse(localStorage.getItem(`${key}`)).password) == passwordLoginM ) {
                console.log("contraseña ok")
                localStorage.setItem('sesionLogin', JSON.stringify({
                    login: true,
                    user: `${key}`,
                    
                }) )
                
                /*
                setTimeout(function() {

                    window.location.assign("http://127.0.0.1:5500/Compra/compra.html");
                }, 3.0*1000); 


                //todavia no funciona
                document.getElementsByClassName('contenedor-campos').style.display = 'none';
                */

                //borrar cuando funciona el codigo de arriba
                window.location.assign("http://127.0.0.1:5500/Compra/compra.html");
                




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
    localStorage.setItem('sesionLogin', JSON.stringify({
        login: false,
        user: `desconectadoD`,
        
    }))
}

function historyM(){
    var logeadoM = JSON.parse(localStorage.sesionLogin).user;
    let busquedaHistorialM = JSON.parse(localStorage.getItem("Historial"))
    let contadorBusquedaUserM = 1;
    //console.log(logeadoM)
    while (contadorBusquedaUserM < busquedaHistorialM.length)  {
        

        if ((busquedaHistorialM[contadorBusquedaUserM].user) == logeadoM ) {
            
            var texto = (`Origen: ${busquedaHistorialM[contadorBusquedaUserM].origen}  
            Destino: ${busquedaHistorialM[contadorBusquedaUserM].destino} 
            Fecha ida: ${busquedaHistorialM[contadorBusquedaUserM].fechaIda}    
            Fecha vuelta: ${busquedaHistorialM[contadorBusquedaUserM].fechaVuelta}  
            Asientos: ${busquedaHistorialM[contadorBusquedaUserM].asientos} 
            Precio: ${busquedaHistorialM[contadorBusquedaUserM].precio}`); 
            
            var etiqueta = document.createElement("p"); 
            
            var contenido = document.createTextNode (texto); 
            
           
            etiqueta.appendChild (contenido); 
            document.getElementById("cajaGraciasM").appendChild(etiqueta); 
            var saltoLineaM = document.createElement("br");
            document.getElementById("cajaGraciasM").appendChild(saltoLineaM);

            

            
         }
         contadorBusquedaUserM++;
     }
     
     


    console.log(busquedaHistorialM[1].user)  //para busca en toso los usuarios
    //console.log(busquedaHistorialM)   //para ver todos los historiales

}


