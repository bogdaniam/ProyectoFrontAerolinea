

//console.log(numTarjeta.split('').length);



function pagar () {
    const numTarjeta = document.getElementById('numeroTarjeta').value;
    if(numTarjeta.match('[0-9]{16}')) {
        console.log("Tarjeta valida");
    } else {
        console.log("Tarjeta no valida");
    }

    const caducidadTarjeta = document.getElementById('cadTarjeta').value;
    if(caducidadTarjeta.match('[0-9]{2}/[0-9]{2}')){
        console.log("Caducidad valida");
    } else {
        console.log("Caduidad no valida");
    }
    
    const cvv = document.getElementById('cvv').value;
    if(cvv.match(['[0-9]{3}'])) {
        console.log("CVV valido");
    } else {
        console.log("CVV no valido");
    }
}