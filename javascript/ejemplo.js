const carrito = [];

const fideos = {
    id: 1,
    imagen: "./multimedia/productos_alm/fideos-lucchetti.jpg",
    nombre: "Fideos Lucchetti",
    descripcion: "Fideos Lucchetti Mostachol 500gr",
    precio: 135.0,
}

const arroz = {
    id: 2,
    imagen: "./multimedia/productos_alm/arroz-Lucchetti.webp",
    nombre: "Arroz Lucchetti",
    descripcion: "Arroz Lucchetti largo fino 1kg",
    precio: 295.0,
}

const harina = {
    id: 3,
    imagen: "./multimedia/productos_alm/harina-favorita.jpg",
    nombre: "Harina Favorita",
    descripcion: "Harina Favorita de Trigo 000 1kg",
    precio: 159.99,
}

const yerba = {
    id: 4,
    imagen: "./multimedia/productos_alm/yerba-mañanita.jpg",
    nombre: "Yerba Mañanita",
    descripcion: "Yerba Mate Mañanita con Palo 500gr",
    precio: 389.99,
}

const cafe = {
    id: 5,
    imagen: "./multimedia/productos_alm/cafe-arlistan.jpg",
    nombre: "Cafe Arlistan",
    descripcion: "Café Arlistan Instantaneo En Frasco 170gr",
    precio: 689.99,
}

const azucar = {
    id: 6,
    imagen: "./multimedia/productos_alm/azucar-ledesma.jpg",
    nombre: "Azucar Ledesma",
    descripcion: "Azucar Ledesma Clasica 1kg",
    precio: 215.0,
}

const galletita = {
    id: 7,
    imagen: "./multimedia/productos_alm/galletitas-bagley.jpg",
    nombre: "Galletitas Bagley",
    descripcion: "Galletitas Bagley Surtidas 400gr",
    precio: 329.99,
}


let producto1 = document.getElementById("producto1");
producto1.innerHTML=`
<div class="p-3 border border-2">
    <img class="img-fluid" src=${fideos.imagen} alt="Fideos Lucchetti">
    <h3>${fideos.nombre}</h3>
    <p>${fideos.descripcion}</p>
    <p>$${fideos.precio}</p>
    <button type="button" class="btn btn-primary" id="btn1">Comprar</button>
    </div>
`;

let producto2 = document.getElementById("producto2");
producto2.innerHTML=`
<div class="p-3 border border-2">
    <img class="img-fluid" src=${arroz.imagen} alt="Arroz Lucchetti">
    <h3>${arroz.nombre}</h3>
    <p>${arroz.descripcion}</p>
    <p>$${arroz.precio}</p>
    <button type="button" class="btn btn-primary" id="btn2">Comprar</button>
    </div>
`;

let producto3 = document.getElementById("producto3");
producto3.innerHTML=`
<div class="p-3 border border-2">
    <img class="img-fluid" src=${harina.imagen} alt="Harina Favorita">
    <h3>${harina.nombre}</h3>
    <p>${harina.descripcion}</p>
    <p>$${harina.precio}</p>
    <button type="button" class="btn btn-primary" id="btn3">Comprar</button>
    </div>
`;

let producto4 = document.getElementById("producto4");
producto4.innerHTML=`
<div class="p-3 border border-2">
    <img class="img-fluid" src=${yerba.imagen} alt="Yerba Mañanita">
    <h3>${yerba.nombre}</h3>
    <p>${yerba.descripcion}</p>
    <p>$${yerba.precio}</p>
    <button type="button" class="btn btn-primary">Comprar</button>
    </div>
`;

let producto5 = document.getElementById("producto5");
producto5.innerHTML=`
<div class="p-3 border border-2">
    <img class="img-fluid" src=${cafe.imagen} alt="Café Arlistan">
    <h3>${cafe.nombre}</h3>
    <p>${cafe.descripcion}</p>
    <p>$${cafe.precio}</p>
    <button type="button" class="btn btn-primary">Comprar</button>
    </div>
`;

let product6 = document.getElementById("producto6");
producto6.innerHTML=`
<div class="p-3 border border-2">
    <img class="img-fluid" src=${azucar.imagen} alt="Azucar Ledesma">
    <h3>${azucar.nombre}</h3>
    <p>${azucar.descripcion}</p>
    <p>$${azucar.precio}</p>
    <button type="button" class="btn btn-primary">Comprar</button>
    </div>
`;

let product7 = document.getElementById("producto7");
producto7.innerHTML=`
<div class="p-3 border border-2">
    <img class="img-fluid" src=${galletita.imagen} alt="Galletita Bagley">
    <h3>${galletita.nombre}</h3>
    <p>${galletita.descripcion}</p>
    <p>$${galletita.precio}</p>
    <button type="button" class="btn btn-primary">Comprar</button>
    </div>
`;

let btn = document.getElementById("btn1");
btn1.addEventListener("click", añadiendo);
function añadiendo (){
    console.log ("Añadido al carrito")
}

