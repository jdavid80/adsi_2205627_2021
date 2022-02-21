function validar() {
    let nombreUsuario = document.getElementById("nombres").value;
    if (nombreUsuario === "") {
        alert("Por favor, ingrese el nombre del usuario");
    }
    let apellidosUsuario = document.getElementById("apellidos").value;
    if (apellidosUsuario === "") {
        alert("Por favor, ingrese el apellido del usuario");
    }
    document.getElementById("nombres").innerHTML = nombreUsuario;
}