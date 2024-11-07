//Operadores lógicos
// && Operador AND
console.log(true && true); //true
console.log(true && false); //false
console.log(false && true); //false
console.log(false && false); //false
// || Operador OR
console.log(true || true); //true
console.log(true || false); //true
console.log(false || true); //true
console.log(false || false); //false
// ! Operador NOT
console.log(!true); //false
console.log(!false); //true
//Ejemplo de uso de operadores lógicos
let edad = 20;
let nombre = "Juan";
if (edad >= 18 && nombre === "Juan") {
    console.log("Bienvenido " + nombre);
}
//Ejemplo de uso de operadores lógicos
let edad2 = 20;
let nombre2 = "Juan";
if (edad2 >= 18 || nombre2 === "Juan") {
    console.log("Bienvenido " + nombre2);
}
//Ejemplo de uso de operadores lógicos
let edad3 = 20;
let nombre3 = "Juan";
if (!(edad3 >= 18)) {
    console.log("No eres mayor de edad");
}

