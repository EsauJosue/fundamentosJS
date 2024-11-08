//El método slice() devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido). El array original no se modificará.
const animales = ['ant', 'bison', 'camel', 'duck', 'elephant'];
const animales2 = animales.slice(2, 4);
console.log(animales2); // ["camel", "duck"]

//Si no sabemos cuantos elementos ahay en el array, podemos usar números negativos para contar desde el final del array
const animales3 = animales.slice(-2);
console.log(animales3); // ["duck", "elephant"]

//la sintaxis para slice es la siguiente:
//array.slice(inicio, fin)

