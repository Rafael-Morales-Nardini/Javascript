/*
 Type Conversion (typecasting) vs Type coersion
  */

 console.log (Number('9') + 5)

 /*FALSY
 Quando um valor é considerado false em contextos onde um booleano é obrigatório (condicionais e loops)

 false
 0
 -0
 ""
 null
 undefined
 NaN
 */
console.log (0 ? 'Verdadeiro' : 'Falso')

/*THRUTHY
Quando um valor é considerado true em contextos onde um booleano é obrigatório (Condicionais e loops)

true
{}
[]
1
3.23
"0"
"false"
-1
Infinity
-Infinity
*/
console.log(true ? "Verdadeiro" : "Falso")