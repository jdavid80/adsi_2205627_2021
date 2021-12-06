"use strict"

/* Obtener fecha y hora actual */
var currentTime = new Date();
console.log(currentTime);

/* Métodos para extraer elementos */
var anyoActual = currentTime.getFullYear();
console.log("Año Actual: " + anyoActual);

var mesActual = currentTime.getMonth();
console.log("Mes Actual: " + (mesActual + 1));

var diaMesActual = currentTime.getDate();
console.log("Día del mes: " + diaMesActual);

var diaSemana = currentTime.getDay();
console.log("Día de la semana: " + (diaSemana + 1));

var horaActual = currentTime.getHours();
console.log("Hora actual: " + horaActual);

var minutosActual = currentTime.getMinutes();
console.log("Minutos Actual: " + minutosActual);

var segundosActual = currentTime.getSeconds();
console.log("Segundos Actual: " + segundosActual);

var msActual = currentTime.getMilliseconds();
console.log("Milisegundos Actual: " + msActual);

var ms1970 = currentTime.getTime();
console.log(ms1970);

/* Determinar cuantos días faltan para el año nuevo */
var fechaNewYear = new Date("January 1, 2022");
var msFechaNewYear = fechaNewYear.getTime();
var msCurrentTime = currentTime.getTime();
var msFaltantes = msFechaNewYear - msCurrentTime;
console.log(msFaltantes);
var minutosFechaNewYear = (((msFaltantes / 1000) / 60) / 60 / 24);
console.log(Math.ceil(minutosFechaNewYear));







