let valorUnitario = 112350;

valorIndividual();
calcularSubtotal();
numeroProductosInfo();

function numeroProductosInfo() {
    let numeroActual = document.getElementById("cantidadProductos").innerHTML;
    document.getElementById("cantidad-productos").innerHTML = numeroActual;
    if(numeroActual >= 2) {
        document.getElementById("cantidad-productos").innerHTML = numeroActual.toString() + " productos";
    }
    else {
        document.getElementById("cantidad-productos").innerHTML = numeroActual.toString() + " producto";
    }
    /* document.getElementById("cantidad-productos").innerHTML = numeroActual; */

}
function calcularSubtotal() {
    let cantidadElementos = document.getElementById("cantidadProductos").innerHTML;
    let subtotal = valorUnitario * Number(cantidadElementos);
    let subtotalFormat = new Intl.NumberFormat('es-ES').format(subtotal);
    document.getElementById("valorSubtotal").innerHTML = subtotalFormat;
}
function cargarProducto() {
    let numeroActual = document.getElementById("cantidadProductos").innerHTML;
    if (numeroActual < 10) {
        let numeroProductos = document.getElementById("cantidadProductos").innerHTML = Number(numeroActual) + Number(1);
    }
    calcularSubtotal();
    numeroProductosInfo();
/*     else if (numeroActual >= 3) {
        let textoTope ="lo sentimos, ha superado el tope";
        let topeProducto = document.getElementById("tope").innerHTML = textoTope;
    } */
}
function restarProducto() {
    let numeroActual = document.getElementById("cantidadProductos").innerHTML;
    if (numeroActual > 0) {
        let numeroProductos = document.getElementById("cantidadProductos").innerHTML = Number(numeroActual) - Number(1);
    }
    calcularSubtotal();
    numeroProductosInfo();
}
function valorIndividual() {
    let valorUnitarioFormat = new Intl.NumberFormat('es-ES').format(valorUnitario);
    document.getElementById("valor-unitario").innerHTML = valorUnitarioFormat;
}