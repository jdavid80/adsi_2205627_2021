"use strict"

/* Generar un consecutivo */
/* for (var i = 1; i <= 10; i++) {
    console.log("Aprendiz N. " + i);
} */

/* Recorriendo un arreglo con for */
var aprendiz = new Array();
aprendiz[0] = 352;
aprendiz[1] = "CC";
aprendiz[2] = "1084330256";
aprendiz[3] = "Vicente";
aprendiz[4] = "Fernandez";
aprendiz[5] = "3105687946";
aprendiz[6] = "Pitalito";

var instructor = new Array(124, "CC", "12265812", 95, "TIC", "Jesus", "Calderón");

var sedes = [24, "Yamboró", 41551, "Adriana Pinzón Peralta"];

console.log("Datos del Aprendiz: ");
for (var i = 1; i <= aprendiz.length - 1; i++) {
    console.log(aprendiz[i]);
}

/* Generar números pares del 1 al 20 */
for (let i = 2; i <= 20; i++) {
    console.log(i);
    i++;
}
