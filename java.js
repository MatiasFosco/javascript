//Ejercio de prueba

let mesIngresado = prompt("Ingresa un mes y te digo cuantos dias tiene. Presiona (s) para salir.")

while (mesIngresado != "s"){
    switch (mesIngresado){
        case "enero":
        case "Enero":
        case "ENERO":
            console.log (mesIngresado + " tiene 31 días");
            break;
        case "febrero":
        case "Febrero":
        case "FEBRERO":
            console.log (mesIngresado + " tiene 28 días");
            break;
        case "marzo":
        case "Marzo":
        case "MARZO":
            console.log (mesIngresado + " tiene 31 días");
            break;
        case "abril":
        case "Abril":
        case "ABRIL":
            console.log (mesIngresado + " tiene 30 días");
            break;
        case "mayo":
        case "Mayo":
        case "MAYO":
            console.log (mesIngresado + " tiene 31 días");
            break;
        case "junio":
        case "Junio":
        case "JUNIO":
            console.log (mesIngresado + " tiene 30 días");
            break;
        case "julio":
        case "Julio":
        case "JULIO":
            console.log (mesIngresado + " tiene 30 días");
            break;
        case "agosto":
        case "Agosto":
        case "AGOSTO":
            console.log (mesIngresado + " tiene 31 días");
            break;
        case "septiembre":
        case "Septiembre":
        case "SEPTIEMBRE":    
            console.log (mesIngresado + " tiene 30 días");
            break;
        case "octubre":
        case "Octubre":
        case "OCTUBRE":
            console.log (mesIngresado + " tiene 31 días");
            break;
        case "noviembre":
        case "Noviembre":
        case "NOVIEMBRE":
            console.log (mesIngresado + " tiene 31 días");
            break;
        case "diciembre":
        case "Diciembre":
        case "DICIEMBRE":
            console.log (mesIngresado + " tiene 31 días");
            break;
    }
    mesIngresado = prompt ("Ingresa otro mes y te digo cuantos dias tiene. Presiona (s) para salir.");
}

