function validar() {
    let crearParrafo = document.createElement("p");
    let contenedor = document.getElementById("main-content");
    contenedor.appendChild(crearParrafo);
    /* let textoAddParrafo = ""; */
    let nodeToAddParrafo = document.createTextNode("Holis. Yo soy un párrafo");
    crearParrafo.appendChild(nodeToAddParrafo);
}


