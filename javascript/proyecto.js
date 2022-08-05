// En primer lugar voy a preguntar al usuario su nombre y que día de la semana es.
//Se crea una variable descuento para almacenar el mismo en caso de que exista.
let nombre = prompt ("Ingrese su nombre.")
console.log ("Bienvenido " + nombre + "!")


const productos = [ 
    
    {
        nombre: "Fideos",
        marca: "Lucchetti",
        contenido: "500gr",
        precio: 110
    },
    {
        nombre: "Arroz",
        marca: "Lucchetti",
        contenido: "500gr",
        precio: 120
    },
    {
        nombre: "Harina",
        marca: "Favorita",
        contenido: "500gr",
        precio: 100
    },
    {
        nombre: "Yerba",
        marca: "Rosamonte",
        contenido: "500gr",
        precio: 420
    },
    {
        nombre: "Cafe",
        marca: "Nestafe",
        contenido: "170gr",
        precio: 815
    },
    {
        nombre: "Azucar",
        marca: "Ledesma",
        contenido: "500gr",
        precio: 122
    },
    {
        nombre: "Galletitas",
        marca: "Bagley",
        contenido: "500gr",
        precio: 220
    }
]

let carrito = [];

const productosIva = productos.map((producto)=>{
    return {
        nombre: producto.nombre,
        precio: producto.precio * 1.21
    }
}
)


console.table(productosIva);
let producto = prompt ("Que producto estas buscando?" + "Presione la letra (s) si desea salir");
let unidades = 0;

while (producto != "s"){


if ((producto == "fideos" || producto == "Fideos" || producto == "FIDEOS") || 
    (producto == "arroz" || producto == "Arroz" || producto == "ARROZ") || 
    (producto == "harina" || producto == "Harina" || producto == "HARINA") || 
    (producto == "yerba" || producto == "Yerba" || producto == "YERBA") || 
    (producto == "cafe" || producto == "Cafe" || producto == "CAFE") ||
    (producto == "azucar" || producto == "Azucar" || producto == "AZUCAR") || 
    (producto == "galletitas" || producto == "Galletitas" || producto == "GALLETITAS")) {
    switch (producto){
        case "FIDEOS":
        case "Fideos":
        case "fideos":
            total = 133.1;
            break;
        case "ARROZ":
        case "Arroz":
        case "arroz":
            total = 145.2;
            break;
        case "HARINA":
        case "Harina":
        case "harina":
            total = 121;
            break;
        case "YERBA":
        case "Yerba":
        case "yerba":
            total = 508.2;
            break;       
        case "CAFE":
        case "Cafe":
        case "cafe":
            total = 986.15;
            break;
        case "AZUCAR":
        case "Azucar":
        case "azucar":
            total = 147.62;
            break;
        case "GALLETITAS":
        case "Galletitas":
        case "galletitas ":
            total = 266.2;
            break;
        default:
            break;
        } 
        unidades = parseInt(prompt("Cuantas unidades desea llevar?"));
        carrito.push({producto, unidades, total})
        console.log (carrito)
    } else {
        console.log ("No contamos con ese producto.")
    }
    producto = prompt ("Desea elegir otro producto?" + "Presione la letra (s) si desea salir");

    while (producto === "no"){
        console.log ("Gracias por elegirnos")
        carrito.forEach ((carritoTotal) =>{
            console.log ('producto: ${carritoTotal.producto}, unidades: ${carritoTotal.unidades}, total a pagar: ${carritoTotal.unidades * carritoTotal.total}')
        })
        break;
    }
}

let final = carrito.reduce ((acc, el) => acc + el.unidades * el.total, 0);
final = final.toFixed(2);
console.log("El total a pagar es: $" + final)

