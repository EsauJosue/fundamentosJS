// Método filter
// El método filter crea un nuevo array con todos los elementos que pasen una prueba (proporcionada como una función).

const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers); // [2, 4, 6]

//Método reduce
//El método reduce aplica una función a un acumulador y a cada valor de un array (de izquierda a derecha) para reducirlo a un único valor.

const numbers2 = [1, 2, 3, 4, 5, 6];
const sum = numbers2.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // 15
