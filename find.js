//El método find() devuelve el primer elemento de un array que cumpla con la condición dada por la función proporcionada.
//Ejemplo

const array1 = [5, 12, 8, 130, 44];
const mayoresDe10 = array1.find(numero => numero >10);
console.log(array1);
console.log(mayoresDe10);

//El método findIndex() devuelve el índice del primer elemento de un array que cumpla con la condición dada por la función proporcionada.
//Ejemplo

const array2 = [5, 12, 8, 130, 44];
const mayoresDe10Index = array2.findIndex(numero => numero >10);
console.log(array2);
console.log(mayoresDe10Index);


