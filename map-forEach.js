//Métodos que no modifican el array original (Inmutabilidad)
//map() - Crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.
const numbers = [1, 2, 3, 4, 5];
const numbersDouble = numbers.map(function(number) {
    return number * number;
});
console.log(numbers); // [1, 2, 3, 4, 5]
console.log(numbersDouble); // [2, 4, 6, 8, 10]

//forEach() - Ejecuta la función indicada una vez por cada elemento del array.
const numbers2 = numbersDouble;
numbers2.forEach(function(number) {
    console.log(number * number);
});

//EJERCICIO Convertit temperaturas de Farenheit a Celsius
const farenheit = [32, 68, 95, 104, 212];
const celsius = farenheit.map(function(f) {
    return Math.round((f - 32) * 5 / 9);
    //Math.round() redondea al entero más cercano
});
console.log(celsius); // [0, 20, 35, 40, 100]