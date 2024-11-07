// Método filter
// El método filter crea un nuevo array con todos los elementos que pasen una prueba (proporcionada como una función).

const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers); // [2, 4, 6]

//Método reduce
//El método reduce aplica una función a un acumulador y a cada valor de un array (de izquierda a derecha) para reducirlo a un único valor.

const numbers2 = [1, 2, 3, 4, 5, 6];
const sum = numbers2.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
//La sintaxis de reduce es la siguiente: array.reduce(callback( accumulator, currentValue[, index[, array]] )[, initialValue])
console.log(sum); // 15

const words = ['apple', 'bannana', 'hello', 'bye', 'bannana', 'bye'];

const wordCount = words.reduce((accumulator, currentValue) =>{
    if(accumulator[currentValue]){
        accumulator[currentValue] += 1;
    }else{
        accumulator[currentValue] = 1;
    }
    return accumulator;
},{})

console.log(wordCount); // { apple: 1, bannana: 2, hello: 1, bye: 2 }
console.log(typeof wordCount); // object