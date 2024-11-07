const fruits = ['apple', 'banana', 'mango'];
console.log(fruits);
fruits.push('kiwi');
console.log(`Agregando kiwi al arreglo ${fruits}`);

const newFruits = fruits.concat(['orange', 'grape']);
console.log(`Concatenando naranja y uva al arreglo: ${newFruits}`);

const numbersArray = [1, 2, 3, 4, 5];
let suma = 0; 

for (let i = 0; i < numbersArray.length; i++) {
    suma += numbersArray[i];
}
console.log(`Suma de los elementos del arreglo: ${suma}`);