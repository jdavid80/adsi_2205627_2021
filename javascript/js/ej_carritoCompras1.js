function cargarProducto() {
    let numeroActual = document.getElementById("cantidadProductos").innerHTML;
    let numeroProductos = document.getElementById("cantidadProductos").innerHTML = Number(numeroActual) + Number(1);
}
function restarProducto() {
    let numeroActual = document.getElementById("cantidadProductos").innerHTML;
    let numeroProductos = document.getElementById("cantidadProductos").innerHTML = Number(numeroActual) - Number(1);
    numeroProductos.setAttribute("class", "style-text");
}