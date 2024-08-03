//Estos son los tipos de datos que se se pueden utilizar en JavaScript
// 1. String
// 2. Number
// 3. Boolean
// 4. Undefined
// 5. Null
// 6. Object
// 7. Symbol

// 1. String
// Una cadena de texto
let cadena = "Hola Mundo";
console.log(cadena);

// 2. Number
// Un número entero o decimal
let numero = 1000;
console.log(numero);

// 3. Boolean
// Valor verdadero o falso
let verdadero = true;
let falso = false;
console.log(verdadero, falso);

// 4. Undefined
// Indica que una variable no ha sido inicializada
let indefinido;
console.log(indefinido);

// 5. Null
// Indica la ausencia de valor
let nulo = null;
console.log(nulo);

// 6. Object
// Un objeto
let objeto = {
    nombre: "Esaú",
    edad: 23,
    soltero: true
}
console.log(objeto);

// 7. Symbol
// Un valor único e inmutable
let simbolo = Symbol('mi-simbolo');
console.log(simbolo);
let simbolo2 = Symbol('mi-simbolo');
console.log(simbolo2);
console.log(simbolo === simbolo2); //false

// 8. BigInt
// Valores enteros mayores que 2^53 - 1
let numeroGrande = 100
console.log(numeroGrande);
let numeroGrande2 = 100n
console.log(numeroGrande2);


// Tipos de datos primitivos
// Son los tipos de datos más básicos en JavaScript
// Son inmutables
// No tienen métodos
// Se accede por valor
// 1. String
// 2. Number
// 3. Boolean
// 4. Undefined
// 5. Null
// 6. Symbol
// 7. BigInt

// Tipos de datos compuestos
// Son los tipos de datos más complejos en JavaScript
// Son mutables
// Tienen métodos
// Se accede por referencia
// 1. Object

// Tipos de datos especiales
// Son los tipos de datos especiales en JavaScript
// 1. Function
// 2. Array
// 3. Date
// 4. RegExp
// 5. Error

// 1. Function
// Una función
let funcion = function(){}
console.log(funcion);

// 2. Array
// Un arreglo
let arreglo = [1,2,3,4,5];
console.log(arreglo);

// 3. Date
// Una fecha
let fecha = new Date();
console.log(fecha);

// 4. RegExp
// Una expresión regular
let expresionRegular = /abc/;
console.log(expresionRegular);

// 5. Error
// Un error
let error = new Error('Error');
console.log(error);

// typeof
// Nos permite saber el tipo de dato de una variable
console.log(typeof cadena);
console.log(typeof numero);
console.log(typeof verdadero);
console.log(typeof indefinido);
console.log(typeof nulo);
console.log(typeof objeto);
console.log(typeof simbolo);
console.log(typeof numeroGrande);
console.log(typeof funcion);
console.log(typeof arreglo);
console.log(typeof fecha);
console.log(typeof expresionRegular);
console.log(typeof error);

