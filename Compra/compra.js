
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
/*
let element = document.getElementById("ida").value;
element.addEventListener("click", myFunction);

function myFunction() {
    let fechaIda = document.getElementById("ida").value
    let fechaVuelta = document.getElementById("vuelta");
    fechaVuelta.setAttribute("min", `${fechaIda}`); 
}*/




function compra() {
    let salida = document.getElementById("salida").value
    let destino = document.getElementById("destino").value
    //console.log(salida)
    //console.log(destino)
    let ida = document.getElementById("ida").value
    let vuelta = document.getElementById("vuelta").value
    //console.log(ida)
    //console.log(vuelta)
}

