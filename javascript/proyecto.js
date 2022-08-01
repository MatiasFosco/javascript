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
    console.log ("Descuentos los dias Lunes, miercoles y viernes")
}

//Funcion iva
function iva (precio){
    let conIva = precio * 1.21;
    return conIva;
}

class Producto {
    constructor (nombre, marca, contenido, valor){
        this.nombre = nombre.toUpperCase();
        this.marca = marca;
        this.contenido = contenido;
        this.valor = valor;
    }
    iva(){
        this.valor = this.valor *1.21
    }
}

const productos = [];
productos.push(new Producto("Fideos", "Lucchetti", "500gr", 110));
productos.push(new Producto("Arroz", "Lucchetti", "500gr", 120));
productos.push(new Producto("Harina", "Favorita", "500gr",100));
productos.push(new Producto ("Yerba", "Rosamonte", "500gr", 420));
productos.push(new Producto("Cafe","Nescafe", "170gr", 815));
productos.push(new Producto("Azucar", "Ledesma", "500gr", 122));
productos.push(new Producto("Galletitas", "Bagley", "500gr",220));

for (const Producto of productos){
    Producto.iva();
}

console.log("Que producto estas buscando? presione s para salir");
for (const Producto of productos){
    console.log(Producto.nombre + " (" + Producto.marca + ") $" + Producto.valor)
}


