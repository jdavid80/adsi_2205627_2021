"use strict"

/* Conversión Implícita */
var num1 = 12;
var num2 = "4";

console.log("La suma de los dos números es: " + (num1 + num2));
console.log("La resta de los dos números es: " + (num1 - num2));
console.log("La multiplicación de los dos números es: " + (num1 * num2));
console.log("La división de los dos números es: " + (num1 / num2));

/* Conversión  Explícita a enteros*/
var num3 = "4";
var num3Int = parseInt(num3);
var num4 = "28";
var num4Int = parseInt(num4);
console.log("La suma de los elementos es: " + (num3Int + num4Int));

/* Conversión Explicita a decimales */
var num5 = "4.7";
var num5Float = parseFloat(num5);
var num6 = "8.6";
var num6Float = parseFloat(num6);
console.log("La suma de los elementos es: " + (num5Float + num6Float));

/* Conversión Explicita a string */
var num7 = "425";
var num7Str = num7.toString();
var num8 = "316";
var num8Str = num8.toString();
console.log("La suma de los elementos es: " + (num7Str + num8Str));













