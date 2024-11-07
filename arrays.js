/*
Un array es una estructura de datos que nos permite almacenar varios valores en una sola variable. 
Cada valor tiene un índice, que empieza en 0.

Para declarar un array, utilizamos corchetes [] y separamos cada valor con una coma.

Ejemplo:

*/
let frutas = ['Manzana', 'Banana'];
console.log(frutas); // ['Manzana', 'Banana']

//Para acceder a un valor específico de un array, utilizamos el índice correspondiente entre corchetes [].

let peliculas = ['La verdad duele', 'La vida es bella', 'Gran Torino'];
console.log(peliculas[0]); // La verdad duele
console.log(peliculas[1]); // La vida es bella
console.log(peliculas[2]); // Gran Torino

//Otra forma de declarar un array es utilizando la palabra reservada new seguida de la clase Array.

let numeros = new Array(1, 2, 3, 4, 5);
console.log(numeros); // [1, 2, 3, 4, 5]

//Para acceder a la longitud de un array, utilizamos la propiedad length.

let heroes = ['Batman', 'Superman', 'Mujer Maravilla'];
console.log(heroes.length); // 3

//Para agregar un valor al final de un array, utilizamos el método push.

let colores = ['Rojo', 'Azul', 'Amarillo'];
colores.push('Verde');
console.log(colores); // ['Rojo', 'Azul', 'Amarillo', 'Verde']

//Para eliminar el último valor de un array, utilizamos el método pop.

let dias = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];
dias.pop();
console.log(dias); // ['Lunes', 'Martes', 'Miércoles', 'Jueves']

//Para agregar un valor al inicio de un array, utilizamos el método unshift.

let paises = ['México', 'Argentina', 'Brasil'];
paises.unshift('Colombia');
console.log(paises); // ['Colombia', 'México', 'Argentina', 'Brasil']

//Para eliminar el primer valor de un array, utilizamos el método shift.

let ciudades = ['Nueva York', 'Los Ángeles', 'Chicago'];
ciudades.shift();
console.log(ciudades); // ['Los Ángeles', 'Chicago']

//Para encontrar la posición de un valor en un array, utilizamos el método indexOf.

let frutas2 = ['Manzana', 'Banana', 'Pera'];
console.log(frutas2.indexOf('Banana')); // 1

//Si el valor no se encuentra en el array, el método indexOf devuelve -1.

let frutas3 = ['Manzana', 'Banana', 'Pera'];
console.log(frutas3.indexOf('Sandía')); // -1

//Para eliminar un valor de un array, utilizamos el método splice.

let colores2 = ['Rojo', 'Azul', 'Amarillo', 'Verde'];
colores2.splice(1, 1); //la sintaxis es splice(posición, cantidad de elementos a eliminar)
console.log(colores2); // ['Rojo', 'Amarillo', 'Verde']

//Para copiar un array, utilizamos el método slice.

let numeros2 = [1, 2, 3, 4, 5];
let numerosCopia = numeros2.slice();
console.log(numerosCopia); // [1, 2, 3, 4, 5]

//Para recorrer un array, utilizamos un bucle for.

let frutas4 = ['Manzana', 'Banana', 'Pera'];
for (let i = 0; i < frutas4.length; i++) {
  console.log(frutas4[i]);
}
/*
Manzana
Banana
Pera
*/

//También podemos recorrer un array utilizando el método forEach.

let colores3 = ['Rojo', 'Azul', 'Amarillo', 'Verde'];
colores3.forEach(function(color) {
  console.log(color);
});
/*
Rojo
Azul
Amarillo
Verde
*/

//Para filtrar un array, utilizamos el método filter.

let numeros3 = [1, 2, 3, 4, 5];
let numerosPares = numeros3.filter(function(numero) {
  return numero % 2 === 0;
});
console.log(numerosPares); // [2, 4]

//Para mapear un array, utilizamos el método map. El metodo map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.

let numeros4 = [1, 2, 3, 4, 5];
let numerosDobles = numeros4.map(function(numero) {
  return numero * 2;
});
console.log(numerosDobles); // [2, 4, 6, 8, 10]

//Para reducir un array a un solo valor, utilizamos el método reduce.

let numeros5 = [1, 2, 3, 4, 5];
let suma = numeros5.reduce(function(acumulador, numero) {
  return acumulador + numero;
});
console.log(suma); // 15    

//Para ordenar un array, utilizamos el método sort.

let frutas5 = ['Manzana', 'Banana', 'Pera'];
frutas5.sort();
console.log(frutas5); // ['Banana', 'Manzana', 'Pera']

//Para invertir un array, utilizamos el método reverse.

let numeros6 = [1, 2, 3, 4, 5];
numeros6.reverse();
console.log(numeros6); // [5, 4, 3, 2, 1]

//Para concatenar dos arrays, utilizamos el método concat.

let frutas6 = ['Manzana', 'Banana'];
let masFrutas = ['Pera', 'Sandía'];
let todasLasFrutas = frutas6.concat(masFrutas);
console.log(todasLasFrutas); // ['Manzana', 'Banana', 'Pera', 'Sandía']

//Para buscar un valor en un array, utilizamos el método find.

let frutas7 = ['Manzana', 'Banana', 'Pera'];
let fruta = frutas7.find(function(fruta) {
  return fruta === 'Banana';
});
console.log(fruta); // Banana

//Para saber si un valor existe en un array, utilizamos el método includes.

let frutas8 = ['Manzana', 'Banana', 'Pera'];
let tieneBanana = frutas8.includes('Banana');
console.log(tieneBanana); // true

//Para saber si todos los valores de un array cumplen una condición, utilizamos el método every.

let numeros7 = [1, 2, 3, 4, 5];
let sonPositivos = numeros7.every(function(numero) {
  return numero > 0;
});
console.log(sonPositivos); // true

//Para saber si al menos un valor de un array cumple una condición, utilizamos el método some.

let numeros8 = [1, 2, 3, 4, 5];
let hayNegativos = numeros8.some(function(numero) {
  return numero < 0;
});
console.log(hayNegativos); // false

//Para convertir un array en una cadena, utilizamos el método join.

let frutas9 = ['Manzana', 'Banana', 'Pera'];
let cadena = frutas9.join(', ');
console.log(cadena); // Manzana, Banana, Pera

//La inmutabilidad en un array significa que no podemos modificar directamente los valores de un array. Si queremos modificar un array, debemos crear uno nuevo.

let frutas10 = ['Manzana', 'Banana', 'Pera'];
let nuevasFrutas = [...frutas10, 'Sandía'];
console.log(nuevasFrutas); // ['Manzana', 'Banana', 'Pera', 'Sandía']
