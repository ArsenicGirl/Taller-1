'use strict'
//Realizar un programa que pida al usuario 2 números y se realicen las 4operaciones básicas (Suma, resta, multiplicación, división). Imprimir los resultados.
let num1;
let num2;
//let resta;
/*let multiplicacion;
let division;

//resta = 0;
multiplicacion = 0;
division = 0;*/

num1 = parseFloat(prompt("ingrese un número: "));
num2 = parseFloat(prompt("ingrese otro segundo número: "));

    function suma (num1, num2){
        return num1 + num2;
    }
    let result = 0;
    result = parseFloat(num1) + parseFloat(num2);
    //result = suma (3,5);
    console.log(result);
    alert ("El resultado de la suma es: "+suma);
 /*   
function resta (num1= 0, num2 = 0){
            return num1 + num2;
        }
        let resultado = 0;
        result = resta (3,5);
        console.log(resultado);*/