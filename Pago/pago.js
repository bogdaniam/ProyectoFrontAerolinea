
function pagar () {
    const numTarjeta = document.getElementById('numeroTarjeta').value;
    const inputTarjeta = document.getElementById('numeroTarjeta');

    if(numTarjeta.match(/^[0-9]{16}$/)) {
        console.log("Tarjeta valida");
        inputTarjeta.style.borderColor = "blue";
    } else {
        inputTarjeta.style.borderColor = "red";
        console.log("Tarjeta no valida");
    }

    const caducidadTarjeta = document.getElementById('cadTarjeta').value;
    const inputCaducidad = document.getElementById('cadTarjeta');

    if(caducidadTarjeta.match(/^[0-9]{2}-[0-9]{2}$/)){
        console.log("Caducidad valida");
        inputCaducidad.style.borderColor = "blue";
    } else {
        inputCaducidad.style.borderColor = "red";
        console.log("Caducidad no valida")
    }
    
    const cvv = document.getElementById('cvv').value;
    const inputCvv = document.getElementById('cvv');

    if(cvv.match(/^[0-9]{3}$/)) {
        console.log("CVV valido");
        inputCvv.style.borderColor = "blue";
    } else {
        inputCvv.style.borderColor = "red";
        console.log("CVV no valido")
    }
};