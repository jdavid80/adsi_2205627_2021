"use strict"

/* Generando números aleatorios con el método random */
var num1 = Math.random();
console.log(num1);

for (var i = 0; i < 99; i++) {
    var num2 = Math.random() * 10;
    var num2Round = Math.round(num2);
    if (num2Round === 0) {
        num2Round = 1;
    } 
    else if (num2Round === 10) {
        num2Round = 9;
    }
    else {
        num2Round = Math.round(num2);
    }
    console.log(num2Round);
}

var num3 = Math.random() * 1000;
console.log(Math.round(num3));