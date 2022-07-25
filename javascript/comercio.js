// En primer lugar voy a preguntar al usuario su nombre y que día de la semana es.
//Se crea una variable descuento para almacenar el mismo en caso de que exista.
let nombre = prompt ("Ingrese su nombre.")
let dia = prompt("Bienvenido " + nombre + " que día es hoy?");
let descuento = 0;


// Los días lunes(descuento del 15%), miércoles(descuento del 30%) y viernes(descuento del 20%). 
if ((dia == "lunes") || (dia == "LUNES") || (dia == "Lunes")){
    descuento = 0.15;
    alert ("Todos los lunes tenes un 15% de descuento en productos de almacen!")
} else if ((dia == "miercoles") || (dia == "MIERCOLES") || (dia == "Miercoles")){
    descuento = 0.30;
    alert ("Todos los miercoles tenes un 30% de descuento en productos de almacen!")
} else if ((dia == "viernes")||(dia == "VIERNES")||(dia =="Viernes")){
    descuento = 0.20;
    alert ("Todos los viernes tenes un 20% de descuento en productos de almacen!")
} else {
    console.log ("Hoy no contamos con descuento pero si con los mejores precios!")
}

//Se le pregunta al usuario que producto desea y se le entrega un listado
let productos = prompt("Que producto esta buscando?" + "\nCafe" + "\nLeche" + "\nHarina" + "\nManteca" + "\nGalletita" + "\nArroz" + "\nFideos" + "\nYerba" + "\nGaseosa");

//Funcion iva
function iva (precio){
    let conIva = precio * 1.21;
    return conIva;
}

//Variables que van a almacenar el total con iva sin descuento y el total con iva y descuento.
let total = 0;
let totalDesc = 0;

while (productos != "s") {
switch (productos){
    case "CAFE":
    case "Cafe":
    case "cafe":
        valor = iva (690);
        total = total + valor;
        totalDesc = total - (total * descuento);
        console.log ("El precio del cafe es: $" + valor);
        break;
    case "LECHE":
    case "Leche":
    case "leche":
        valor = iva (145);
        total = total + valor;
        totalDesc = total - (total * descuento);
        console.log ("El precio de la leche es: $" + valor);
        break;
    case "HARINA":
    case "Harina":
    case "harina":
        valor = iva (80);
        total = total + valor;
        totalDesc = total - (total * descuento);
        console.log ("El precio de la harina es: $" + valor);
        break;
    case "MANTECA":
    case "Manteca":
    case "manteca":
        valor = iva (95);
        total = total + valor;
        totalDesc = total - (total * descuento);
        console.log ("El precio de la manteca es: $" + valor);
        break;
    case "GALLETITA":
    case "Galletita":
    case "galletita":
        valor = iva (235);
        total = total + valor;
        totalDesc = total - (total * descuento);
        console.log ("El precio de las galletitas es: $" + valor);
        break;
    case "ARROZ":
    case "Arroz":
    case "arroz":
        valor = iva (97);
        total = total + valor;
        totalDesc = total - (total * descuento);
        console.log ("El precio del arroz es: $" + valor);
        break;
    case "FIDEOS":
    case "Fideos":
    case "fideos":
        valor = iva (92);
        total = total + valor;
        totalDesc = total - (total * descuento);
        console.log ("El precio de los fideos es: $" + valor);
        break;
    case "YERBA":
    case "Yerba":
    case "yerba":
        valor = iva (325);
        total = total + valor;
        totalDesc = total - (total * descuento);
        console.log ("El precio de la yerba es: $" + valor);
        break;
    case "GASEOSA":
    case "Gaseosa":
    case "gaseosa":
        valor = iva (305);
        total = total + valor;
        totalDesc = total - (total * descuento);
        console.log ("El preciosa de la gaseosa es: $" + valor);
        break;
    default:
        console.log ("No contamos con ese producto");
        break;
    }
    productos = prompt("Que otro producto esta buscando?" + "\nCafe" + "\nLeche" + "\nHarina" + "\nManteca" + "\nGalletitas" + "\nArroz" + "\nFideos" + "\nYerba" + "\nGaseosas");
}



alert ("El total es: " + totalDesc);

