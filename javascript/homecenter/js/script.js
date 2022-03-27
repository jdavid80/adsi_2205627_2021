let btnAbrirPopup = document.getElementById("btn-abrir-popup");
let overlay = document.getElementById("overlay");
let popup = document.getElementById("popup");
let btnCerrarPopUp = document.getElementById("btn-cerrar-popup");

/* btnAbrirPopup.addEventListener("click", function() {
    overlay.classList.add("active");
    popup.classList.add("active");
});
btnCerrarPopUp.addEventListener("click", function() {
    overlay.classList.remove("active");
    popup.classList.remove("active");
}); */

const lupa = document.getElementById("idLupa");
lupa.addEventListener("click", miFunction);

/* window.addEventListener("click", function() {
    cargar();
}); */
/* function limpiarEncabezado() {
    document.getElementById("idHeader").innerHTML = "";
} */
function miFunction() {
    document.getElementById("idHeader").innerHTML = "";
    llamarNuevaVentana();
}

function llamarNuevaVentana() {
    let contenedorNuevo = document.createElement("div");
    let contenedorOld = document.getElementById("idHeader");
    contenedorOld.appendChild(contenedorNuevo);
    contenedorNuevo.setAttribute("class", "contenedor-nuevo");

    let iconoLupa = document.createElement("img");
    let contenedor = document.getElementById("idHeader");
    contenedor.appendChild(iconoLupa);
    iconoLupa.setAttribute("src", "img/lupa.png");
    iconoLupa.setAttribute("class", "lupa-nueva");

    let inputNuevo = document.createElement("input");
    contenedor.appendChild(inputNuevo);
    inputNuevo.setAttribute("type", "text");
    inputNuevo.setAttribute("class", "input-nuevo");
}
function openPopup() {
    let popup = document.getElementById("popup");
    popup.classList.add("open-popup");
}