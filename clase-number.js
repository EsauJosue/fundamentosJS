// 1. Tipo entero y decimal (number)
const numero = 1000;
const decimal = 1000.1;

console.log(typeof numero);
console.log(typeof decimal);

// 2. Notación científica
const cientifico = 1e6;
console.log(cientifico);

// 3. Infinitos y NaN
const infinito = 1 / 0;
console.log(infinito);

const noEsNumero = NaN;
console.log(noEsNumero);

//Operaciones aritméticas
//1. Suma
const suma = 2 + 2;
console.log(suma);

//2. Resta
const resta = 2 - 2;
console.log(resta);

//3. Multiplicación
const multiplicacion = 2 * 2;
console.log(multiplicacion);

//4. División
const division = 2 / 2;
console.log(division);

//5. Módulo, residuo de la división
const modulo = 2 % 2;
console.log(modulo);

//6. Incremento
let contador = 2;
contador++;
console.log(contador);

//7. Decremento
contador--;
console.log(`Decremento: ${contador}`);


//8. Presición de decimales, sirve para redondear un número decimal
let numeroDecimal = 0.1 + 0.2;
console.log(numeroDecimal);
console.log(numeroDecimal.toFixed(2));

//9. Operaciones avanzadas con números
const raizCuadrada = Math.sqrt(144);
console.log(raizCuadrada);
//10. Número absoluto
const absoluto = Math.abs(-144);
console.log(absoluto);
//11.Número aleatorio
const aleatorio = Math.random();
console.log(aleatorio);
//12. Potencia de un número
const potencia = Math.pow(2, 3);
console.log(potencia);