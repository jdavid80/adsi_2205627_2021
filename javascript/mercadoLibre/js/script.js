/* let automovil = {
    marca: undefined,
    anyo: undefined,
    precio: undefined,
    motor: undefined,
    ciudad: undefined,
    imagen: undefined
}; */

function Automovil(marca, version, anyo, precio, kilometraje, motor, ciudad, imagen) {
    this.marca = marca;
    this.version = version;
    this.anyo = anyo;
    this.precio = precio;
    this.kilometraje = kilometraje;
    this.motor = motor;
    this.ciudad = ciudad;
    this.imagen = imagen;
}

let auto1 = new Automovil("Mazda", "Touring", 2015, 41500000, 65800, 2000, "Bogotá", "img/mazda3_2015.jpeg");
let auto2 = new Automovil("Mazda", "Prime", 2021, 82500000, 12650, 2000, "Cali", "img/mazda3_2021.jpeg");
let auto3 = new Automovil("Mazda", "Touring", 2019, 73900000, 22090, 2000, "Medellín", "img/mazda3_2019.jpeg");

function llamarVehiculo() {
    limpiarVentana();
    mostrarVehiculo(auto2);
    mostrarVehiculo(auto1);
    mostrarVehiculo(auto3);
}

function mostrarVehiculo(auto) {
    let contenedorPrincipal = document.getElementById("main-content");
    let contenedorImg = document.createElement("div");
    contenedorPrincipal.appendChild(contenedorImg);
    contenedorImg.setAttribute("class", "style-contentImg");

    let imgAuto = document.createElement("img");
    imgAuto.setAttribute("src", auto.imagen);
    imgAuto.setAttribute("class", "img-style");
    contenedorImg.appendChild(imgAuto);

    let valorAuto = document.createElement("label");
    auto.precio = new Intl.NumberFormat('es-ES').format(auto.precio);
    let textoValorAuto = document.createTextNode(auto.precio);
    valorAuto.appendChild(textoValorAuto);
    valorAuto.setAttribute("class", "style-precio");
    contenedorImg.appendChild(valorAuto);

    let contenedorSeparador = document.createElement("div");
    let anyoVehiculo = document.createElement("label");
    let textoAnyoVehiculo = document.createTextNode(auto.anyo);
    anyoVehiculo.appendChild(textoAnyoVehiculo);
    anyoVehiculo.setAttribute("class", "style-anyo");
    contenedorSeparador.appendChild(anyoVehiculo);
    contenedorImg.appendChild(contenedorSeparador);
    contenedorSeparador.setAttribute("class", "style-contentSeparador");

    let kilometrajeVehiculo = document.createElement("label");
    let textoKilometrajeVehiculo = document.createTextNode(auto.kilometraje);
    kilometrajeVehiculo.appendChild(textoKilometrajeVehiculo);
    kilometrajeVehiculo.setAttribute("class", "style-kilometraje");
    contenedorImg.appendChild(kilometrajeVehiculo);

    let descripcionVehiculo = document.createElement("label");
    let textoDescripcionVehiculo = document.createTextNode(auto.marca + " " + auto.version);
    descripcionVehiculo.appendChild(textoDescripcionVehiculo);
    descripcionVehiculo.setAttribute("class", "style-descripcion");
    contenedorImg.appendChild(descripcionVehiculo);
}
/* function leerInput() {
    let textoBusqueda = document.getElementById("llamarVehiculo");

    textoBusqueda.addEventListener("keyup", function(event) {
        if (event.keyCode)
    })
} */
window.addEventListener("keydown", function(event) {
    let busqueda = document.getElementById("textoBusqueda").value;
    if(event.key == "Enter") {
        if (busqueda == "Mazda 3") {
            llamarVehiculo();
        }
        else {
        this.alert("No se han encontrado coincidencias.");
        }
    }
});
function limpiarVentana() {
    document.getElementById("main-content").innerHTML = "";
}
