const asientos = [];
function colorear(boton) {

    if (asientos.length < 1) {
        asientos.push(`${boton.innerHTML}`);
        boton.style.backgroundColor = "red";

        for (let i = 0; i < asientos.length; i++) {
            if (asientos[i] == (`${boton.innerHTML}`)) {
                asientos.splice(i, 1);
                boton.style.backgroundColor = "green"
                console.log("Estoy en el if del for")
            } else {
                console.log("Algo va mal");
            }
        }

        localStorage.setItem("Asientos", JSON.stringify(asientos));
        console.log(asientos);
    }
}
