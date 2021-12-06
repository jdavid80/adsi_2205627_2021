"use script"

/* Formas de declarar arreglos */
/* Forma 1 */
var aprendiz = new Array();
aprendiz[0] = 352;
aprendiz[1] = "CC";
aprendiz[2] = "1084330256";
aprendiz[3] = "Vicente";
aprendiz[4] = "Fernandez";
aprendiz[5] = "3105687946";
aprendiz[6] = "Pitalito";

/*  Forma 2*/
var instructor = new Array(124, "CC", "12265812", 95, "TIC", "Jesus", "Calderón");

/* Forma 3 */
var sedes = [24, "Yamboró", 41551, "Adriana Pinzón Peralta"];

console.log("El aprendiz " + aprendiz[3] + " " + aprendiz[4] + " cuyo líder es el " +
             "instructor " + instructor[5] + " " + instructor[6] + " pertenece a " +
             "la Sede " + sedes[1]);

/* Propiedad Length */
console.log("El arreglo instructor tiene " + instructor.length + " elementos");
console.log("El elemento 7 de instructor tiene " + instructor[6].length + " carácteres");

