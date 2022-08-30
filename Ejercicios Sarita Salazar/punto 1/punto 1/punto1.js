'use strict'
//Realizar un programa que pida al usuario 2 números y se realicen las 4operaciones básicas (Suma, resta, multiplicación, división). Imprimir los resultados.
let num1;
let num2;
let multiplicacion;
let division;

multiplicacion = 0;
division = 0;

num1 = prompt("ingrese un número: ");
num2 = prompt("ingrese otro segundo número: ");

    function suma (num1, num2){
    
    let result1;
    result1 = num1 + num2;
    return result1;
    console.log(suma(4,5));
    }
    alert("El resultado de la suma es: " + suma);
    //function resta (num1= 0, num2 = 0){
       //     return num1 - num2;
        
   // }
