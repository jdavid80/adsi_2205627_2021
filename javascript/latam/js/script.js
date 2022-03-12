let fechaVuelo = undefined;

class Vuelos {
    constructor(horario, origen, destino, precio, stopping, economic) {
        this.horario = horario;
        this.origen = origen;
        this.destino = destino;
        this.precio = precio;
        this.stopping = stopping;
        this.economic = economic;
    }
}


fechaVuelo = new Date(2022, 02, 12, 10, 12, 0);
horarioVuelo = fechaVuelo.getHours() + ":" + fechaVuelo.getMinutes();
/* let vuelo1 = new Vuelo(horarioVuelo, "Bogotá", "Cartagena", 258000, 1, 1); */


let vuelos = [{
    "horario":  fechaVuelo.getHours() + ":" + fechaVuelo.getMinutes(),
    "origen": "Bogotá",
    "destino": "Cartagena",
    "precio": 375000,
    "stopping": 1,
    "economic": 1
},
{
    "horario":  fechaVuelo.getHours() + ":" + fechaVuelo.getMinutes(),
    "origen": "Bogotá",
    "destino": "Cartagena",
    "precio": 268000,
    "stopping": 1,
    "economic": 1
},
{
    "horario":  fechaVuelo.getHours() + ":" + fechaVuelo.getMinutes(),
    "origen": "Bogotá",
    "destino": "Cartagena",
    "precio": 348000,
    "stopping": 1,
    "economic": 1
}]

function buscarVuelos() {
    let i = 0;
    for(let i = 0; i < vuelos.length; i++) {
        cargarVuelos(vuelos[i].horario, vuelos[i].precio, vuelos[i].stopping, vuelos[i].economic);
    } 
    /* 
        alert(vuelos[i].horario);
    cargarVuelos(vuelos[1]);
    cargarVuelos(vuelos[2]); */
}

/* let vuelosCartagena = () => {
    return vuelos.filter((pizza) => {
        if (vuelo.destino == "Cartagena") {
            return true;
        }
    });
} */

/* let vuelosCartagena = vuelos.filter */

function cargarVuelos(horarioVuelo, precioVuelo, paradasVuelo,  economicVuelos) {
    let contentVuelo = document.createElement("div");
    let contentPrincipal = document.getElementById("main-content");
    contentPrincipal.appendChild(contentVuelo);
    contentVuelo.setAttribute("class", "style-content-vuelo");

    let horario = document.createElement("label");
    contentVuelo.appendChild(horario);
    let txtHorario = document.createTextNode(horarioVuelo);
    horario.setAttribute("class", "style-horario");
    horario.appendChild(txtHorario);
    

    let valorTiquete = document.createElement("label");
    contentVuelo.appendChild(valorTiquete);
    let precioFormat = new Intl.NumberFormat('es-ES', {}).format(precioVuelo);
    let txtValorTiquete = document.createTextNode("cop" + precioFormat);
    valorTiquete.setAttribute("class", "style-valor");
    valorTiquete.appendChild(txtValorTiquete);

    let stopping = document.createElement("label");
    contentVuelo.appendChild(stopping);
    let txtStopping = document.createTextNode(paradasVuelo);
    let auxTxtStopping = undefined;
    if (txtStopping.data == 1) {
        auxTxtStopping = document.createTextNode("Directo");
    }
    else {
        auxTxtStopping = document.createTextNode("Directo");
    }
    stopping.setAttribute("class", "style-stopping");
    stopping.appendChild(auxTxtStopping);

    let economic = document.createElement("div");
    contentVuelo.appendChild(economic);
    if (economicVuelos === 1) {
        let txtEconomic = document.createTextNode("Mas Económico");
        economic.appendChild(txtEconomic);
        economic.setAttribute("class", "style-economic");
    }
}
