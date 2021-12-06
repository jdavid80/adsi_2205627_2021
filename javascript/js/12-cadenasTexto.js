"use strict"

/* Todo a Mayusculas-->> toUpperCase */
var frase1 = "EsTA Es unA FRase EN MaYUScuLAS";
var frase1May = frase1.toUpperCase();
console.log(frase1May);

/* Todo a Minúsculas -->> toLowerCase */
var frase2 = "ESTA ES UNA FRASE en MInusCULAS";
var frase2Min = frase2.toLowerCase();
console.log(frase2Min);

/* Primera letra en Mayuscula y el resto en minúscula */
var frase3 = "esTA FRAse tiene LA primer LETRA en MayuSCULA"

frase3 = frase3.toLowerCase();
frase3 =  frase3.slice(0, 1) + frase3[1].toUpperCase() + frase3.slice(2);

console.log(frase3);

/* Método Slice */
var frase4 = "En Saladoblanco todo se vive mejor";
var municipio = "San Agustín";
frase4 = frase4.slice(0,3) + municipio + frase4.slice(15);
console.log(frase4);

var frase5 = "En ";
var municipio = "Acevedo";
var restoDeFrase = " todo se vive mejor";
console.log(frase5 + municipio + restoDeFrase);

