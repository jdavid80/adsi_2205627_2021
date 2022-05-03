let btnAbrirPopup = document.getElementById("btn-abrir-popup");
let overlay = document.getElementById("overlay");
let popup = document.getElementById("popup");
let btnCerrarPopUp = document.getElementById("btn-cerrar-popup");

const lupa = document.getElementById("idLupa");
lupa.addEventListener("click", abrirBusqueda);

const lblClose = document.getElementById("idCerrar");
lblClose.addEventListener("click", cerrarBusqueda);

function abrirBusqueda() {
    let removeEncabezado = document.getElementById("idHeader");
    removeEncabezado.classList.add("headerInvisible");
    let nuevoHeader = document.getElementById("header2");
    nuevoHeader.classList.remove("header2Invisible");
    nuevoHeader.classList.add("header2Visible");
}
function cerrarBusqueda() {
     let removerHeader2 = document.getElementById("header2");
    removerHeader2.classList.remove("header2Visible");
    removerHeader2.classList.add("header2Invisible");
    let addHeader1 = document.getElementById("idHeader");
    addHeader1.classList.remove("headerInvisible");
}
function openPopup() {
    let popup = document.getElementById("popup");
    popup.classList.add("open-popup");
    popup.classList.remove("popup");
}
function cerrarPopup() {
    let popup = document.getElementById("popup");
    popup.classList.add("popup");
    popup.classList.remove("open-popup");
}