"use strict"

/* Número fijo de decimales */
var num1 = 12.654874;
var num1Fixed = num1.toFixed(2);
console.log(num1Fixed);

/* Número fijo de decimales sin redondear */
var num2 = 12.699999;
var num2Str = num2.toString();
var cantDigitos = 0;
for (let i=0; i < num2Str.length; i++) {
    if (num2Str[i] === ".") {
        var cantDigitos = i;
    }
}

num2Str = num2Str.slice(0, (cantDigitos + 3));
console.log(parseFloat(num2Str));


