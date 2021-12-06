"use strict"

/* AND.....&& (Y)
   OR......|| (O)
   NOT.... !  (Negación)
   XOR.....^  (O exclusivo) */

   /* Para poder acceder al subsidio de transporte es 
   necesario que el aprendiz cuente con SISBEN o cuente con Jovenes en Acción 
   para poder acceder al beneficio. Si el aprendiz cuenta con los dos
   beneficios no podrá acceder al subsidio y si no cuenta con ningun 
   beneficio tampoco podrá acceder al beneficio de transporte*/

   /* Ejercicio de Y ... El colegio de señoritas solamente acepta genero femenino
   y que sean menores de 18 años*/
   /* Ejercicio de O ... Si en Yamboro no hay energia eléctrica o No hay internet
   la sesión será virtual*/
   /* Si el usuario y la contraseña concuerdan tiene acceso */
   var benefSisben = true;
   var benefJovenes = false;

   if (benefJovenes ^ benefSisben) {
       console.log("El aprendiz puede acceder al beneficio de transporte");
   }
   else {
       console.log("NO puede acceder a ningún beneficio");
   }