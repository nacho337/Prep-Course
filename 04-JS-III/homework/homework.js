// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
//let frutas = ["manzana"; "banana"]
return array[0];
}
///.

function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
//let frutas = ["manzana", "banana"];
  return array[array.length -1];
}
//


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
return array.length;

}

//
function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  
 //var nuevoArreglo = []
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i] + 1
    // nuevoArreglo.push(array[i] + 1)
  }
return array;
}
//

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
array.push(elemento)

return array;
}
//

function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
array.unshift(elemento);
return array;
}
//

function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  return palabras.join(" ");


}
//

function arrayContiene(array, elemento) { //[1, 2, 3, 4]
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  for ( var  i  =  0 ;  i  <  array.length ;  i ++ )  {
    if ( array [ i ]  ===  elemento )  {
      return  true ;
    }
  }
  return false;
}
//
function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
var numero = 0;
for(var i=0; i<numeros.length; i++) {
  numero = numero + numeros[i];
}
return numero;

}
//

function promedioResultadosTest(resultadosTest) { //[1, 2, 3]
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
var largoArray =  resultadosTest.length;

var suma = 0; // 1 

for(var i = 0; i<resultadosTest.length; i++) {
  suma = suma + resultadosTest[i]
}
return suma / largoArray // 6 / 3 suma del arrray por la cantidad que hay dentro
}
//

function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  //([10, 10, 16, 12])).toBe(16);
  var max = 0;
 for(var i = 0; i< numeros.length; i++ ) {
 if(numeros[i]> max) {
  max = numeros[i]
 }
} return max;
}
//
function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
// Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:

  var product = arguments[0]


if(arguments.length < 1) return 0;
if(arguments.length === 1) return arguments[0];
for(var i = 1; i < arguments.length; i++){
product*= arguments[i];
}
return product;

}
//

function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  //expect(cuentoElementos([10, 10, 18, 21])).toBe(1);
var newArray = []; //modificando nuevamente js3
for(var i = 0; i < arreglo.length; i++){
if(arreglo[i] > 18) {
  newArray.push(arreglo[i])
  }
 }
return newArray.length;
}
//
function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  //expect(diaDeLaSemana(3)).toBe("Es dia Laboral");
 // expect(diaDeLaSemana(2)).toBe("Es dia Laboral");
 //expect(diaDeLaSemana(1)).toBe("Es fin de semana");
 // expect(diaDeLaSemana(7)).toBe("Es fin de semana");
if(numeroDeDia < 2 || numeroDeDia > 6){ 
  return "Es fin de semana";
} else {
return "Es dia Laboral";
 }
} 
//

function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  var num = String(n)
  if(num[0] === "9"){
  return true //lo pasa a string y de esta manera lo va a dividir
}
return false;
}
//

function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  
  for(var i = 1; i < arreglo.length; i++){
  if( arreglo[0] === arreglo[i]) { //[0] === [1]..si cumple es true
  return true;
  }
  return false;
  } 
}
//

function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
var newArray = [];
for(var i =0; i < array.length; i++){// se recorre el array
if(array[i] === "Enero") {
  newArray.push(array[i])
}
if(array[i] === "Marzo") {
  newArray.push(array[i])
}
if(array[i] === "Noviembre") {
  newArray.push(array[i])
}
if(newArray.length === 3)
return newArray;
}
return "No se encontraron los meses pedidos"
}
//

function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
var newArray = [];
for(var i = 0; i < array.length; i++){
if(array[i] > 100 && array[i] <= 200){
  newArray.push(array[i]) 
 }
}
return newArray;
}
//
function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
var newArray = [];
var i = 0;
do{
  numero+=2
  i++
  newArray.push(numero)
  if(numero === i){
    return "Se interrumpió la ejecución";
  }
} while(i < 10)
return newArray;
}
//

function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var newArray = [];
  var i = 0;
  while(i < 10){
    i++;
    if(i === 5)
    continue
    numero+=2;
    newArray.push(numero);
  } return newArray;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
