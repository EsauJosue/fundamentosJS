//Spread Operator es una forma más sencilla de hacer lo mismo que slice, pero con una sintaxis más sencilla y clara de entender 
//Los casos de uso son los mismos que para slice y se puede usar en arrays y strings
//La sintaxis es la siguiente:
// [...array] o [...string]
//Copia de un array con spread operator
const animales = ['ant', 'bison', 'camel', 'duck', 'elephant'];
const animales2 = [...animales];
console.log(animales2); // ["ant", "bison", "camel", "duck", "elephant"]

//Copia de un string con spread operator
const string = 'Hola';
const string2 = [...string];
console.log(string2); // ["H", "o", "l", "a"]

//Copia de un array con spread operator y añadiendo un nuevo elemento
const animales3 = [...animales, 'giraffe'];
console.log(animales3); // ["ant", "bison", "camel", "duck", "elephant", "giraffe"]

//Copia de un array con spread operator y añadiendo un nuevo elemento al principio
const animales4 = ['giraffe', ...animales];
console.log(animales4); // ["giraffe", "ant", "bison", "camel", "duck", "elephant"]

//Copia de un array con spread operator y añadiendo un nuevo elemento en medio
const animales5 = ['giraffe', ...animales.slice(2)];
console.log(animales5); // ["giraffe", "camel", "duck", "elephant"]

//Combinación de dos arrays con spread operator
const animales6 = ['giraffe', 'lion'];
const animales7 = [...animales, ...animales6];
console.log(animales7); // ["ant", "bison", "camel", "duck", "elephant", "giraffe", "lion"]

//Combinación de dos arrays con spread operator y añadiendo un nuevo elemento
const animales8 = [...animales, 'giraffe', 'lion'];
console.log(animales8); // ["ant", "bison", "camel", "duck", "elephant", "giraffe", "lion"]

//Creando una copia de un array con spread operator y modificando un elemento
const animales9 = [...animales];
animales9[2] = 'dog';
console.log(animales9); // ["ant", "bison", "dog", "duck", "elephant"]

//Creando una copia de un array con spread operator y eliminando un elemento
const animales10 = [...animales.slice(0, 2), ...animales.slice(3)];
console.log(animales10); // ["ant", "bison", "duck", "elephant"]

//Pasando un array como argumentos a una función
const sum = (a, b, c) => a + b + c;
const numeros = [1, 2, 3];
console.log(sum(...numeros)); // 6

//Pasando un array como argumentos a una función y añadiendo más argumentos
const sum2 = (a, b, c, d) => a + b + c + d;
const numeros2 = [1, 2, 3];
console.log(sum2(...numeros2, 4)); // 10