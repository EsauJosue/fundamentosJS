//Funciones puras e impuras 
//Una función pura es aquella que no tiene efectos secundarios, es decir, que no modifica nada fuera de ella misma.
//Una función impura es aquella que tiene efectos secundarios, es decir, que modifica algo fuera de ella misma.

//Side Effects: Efectos secundarios
//1. Modificar variables globales
//2. Modificar parámetros
//3. Solicitudes HTTP
//4. Imprimir en consola
//5. Manipulación del DOM
//6. Obtener la hora actual

//Función pura
function suma(a, b) {
  return a + b;
}

//Función impura
let c = 10;
function suma(a, b) {
  return a + b + c;
}