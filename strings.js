const nombre = 'Josué Martinez';
console.log(`Hola ${nombre}`);

//Tipos de concatenación
console.log('Hola ' + nombre);
console.log('Hola', nombre);

//Convertir a mayúsculas
console.log(nombre.toUpperCase());

//Convertir a minúsculas
console.log(nombre.toLowerCase());

//Tamaño de la cadena
console.log(nombre.length);

//Obtener un caracter de la cadena
console.log(nombre.charAt(0));

//Obtener la última letra de la cadena
console.log(nombre.charAt(nombre.length - 1));

//Obtener un rango de caracteres
console.log(nombre.substr(1, 3));

//Obtener la posición de un caracter
console.log(nombre.indexOf('z'));

//Obtener la posición de un caracter desde el final
console.log(nombre.lastIndexOf('z'));

//Obtener un rango de caracteres
console.log(nombre.slice(1, 3));

//Obtener un rango de caracteres, desde el final
console.log(nombre.slice(-3));

//Obtener un rango de caracteres desde una posición
console.log(nombre.slice(1));
