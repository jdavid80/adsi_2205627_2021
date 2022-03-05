let nodeToAddTable = "";
let nodeToAddTH = "";

function crearTabla() {

    if (validarFormulario() === true) {
        if (!document.getElementById("main-table")) {
            nodeToAddTable = document.createElement("table");
            nodeToAddTable.setAttribute("id", "main-table");
            crearEncabezado();
        }
        let nodeToAddTR = document.createElement("tr");
        nodeToAddTable.appendChild(nodeToAddTR);

        let nodeToAddTD1 = document.createElement("td");
        nodeToAddTR.appendChild(nodeToAddTD1);
        let nodeToAddTD2 = document.createElement("td");
        nodeToAddTR.appendChild(nodeToAddTD2);
        
        nodeToAddTable.setAttribute("class", "table-style");
        let codigo_producto = document.getElementById("codigoProducto").value.trim();

        let nodeToAddtext = document.createTextNode(codigo_producto); 
        nodeToAddTD1.appendChild(nodeToAddtext);
        nodeToAddTD1.setAttribute("class", "td-style");
        let apellidosUsuario = document.getElementById("descripcionProducto").value.trim();
        nodeToAddtext = document.createTextNode(apellidosUsuario); 
        nodeToAddTD2.appendChild(nodeToAddtext);
        let contenedor = document.getElementById("table-js");
        contenedor.appendChild(nodeToAddTable);

        let valorUnitario = document.getElementById("valorUnitario").value;
        nodeToAddText = document.createTextNode(valorUnitario);
        let nodeToAddTD3 = document.createElement("td");
        nodeToAddTD3.appendChild(nodeToAddText);
        nodeToAddTR.appendChild(nodeToAddTD3);

        let unidadesStock = document.getElementById("unidadesStock").value;
        nodeToAddText = document.createTextNode(unidadesStock);
        let nodeToAddTD4 = document.createElement("td");
        nodeToAddTD4.appendChild(nodeToAddText);
        nodeToAddTR.appendChild(nodeToAddTD4);

        limpiarFormulario();
    }
}

function crearEncabezado() {
    let nodeToAddTR = document.createElement("tr");
    nodeToAddTable.appendChild(nodeToAddTR);
    let nodeToAddTDTH1 = document.createElement("th");
    nodeToAddTR.appendChild(nodeToAddTDTH1);
    let nodeToAddTDTH2 = document.createElement("th");
    nodeToAddTR.appendChild(nodeToAddTDTH2);
    let nodeToAddTDTH3 = document.createElement("th");
    nodeToAddTR.appendChild(nodeToAddTDTH3);
    let nodeToAddTDTH4 = document.createElement("th");
    nodeToAddTR.appendChild(nodeToAddTDTH4);
    let nodeToAddtext = document.createTextNode("Código"); 
    nodeToAddTDTH1.appendChild(nodeToAddtext);
    nodeToAddtext = document.createTextNode("Descripción"); 
    nodeToAddTDTH2.appendChild(nodeToAddtext);
    nodeToAddtext = document.createTextNode("Valor Unitario"); 
    nodeToAddTDTH3.appendChild(nodeToAddtext);
    nodeToAddtext = document.createTextNode("Unidades en Stock"); 
    nodeToAddTDTH4.appendChild(nodeToAddtext);
   /*  nodeToAddTH4.setAttribute() */

}

function limpiarFormulario() {
    document.getElementById("codigoProducto").value = "";
    document.getElementById("descripcionProducto").value = "";
    document.getElementById("valorUnitario").value = "";
    document.getElementById("unidadesStock").value = "";
    document.getElementById("codigoProducto").focus();
}
function validarFormulario() {
    if (document.getElementById("codigoProducto").value.trim() == "") {
        alert("Por favor, ingrese el código del producto");
        document.getElementById("codigoProducto").focus();
        return false;
    }
    if (document.getElementById("descripcionProducto").value.trim() == "") {
        alert("Por favor, ingrese la descripción del producto");
        document.getElementById("descripcionProducto").focus();
        return false;
    }
    if (document.getElementById("valorUnitario").value.trim() == "") {
        alert("Por favor, ingrese el valor unitario del producto");
        document.getElementById("valorUnitario").focus();
        return false;
    }
    if (document.getElementById("unidadesStock").value.trim() == "") {
        alert("Por favor, ingrese las unidades del stock");
        return false;
    }
    return true;
}