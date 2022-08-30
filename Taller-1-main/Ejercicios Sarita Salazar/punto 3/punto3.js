//Leer un número determinar si es par o impar e imprimir el mensaje.
'use strict';

let num;
num = 0;
//num = 8;

num = parseInt(prompt("ingrese un número: "));
let residuo;
residuo = 0;
    if (num % 2 == 0){
        alert("Es par el número " +residuo);
        //console.log('par');
    }
    else{
       alert("Su numero es impar")
        //console.log('impar');
    }
   // export{num as num}