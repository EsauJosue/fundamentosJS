//Metodos que modifican el array original (Mutabilidad)
// push() - Agrega uno o más elementos al final del array.

const countries = ['México', 'Argentina', 'Brasil'];
const newCountries = countries.push('Colombia');

console.log(countries); // ['México', 'Argentina', 'Brasil', 'Colombia']
console.log(newCountries); // 4

// pop() - Elimina el último elemento de un array.

const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];
const lastDay = days.pop();
console.log(days); // ['Lunes', 'Martes', 'Miércoles', 'Jueves']