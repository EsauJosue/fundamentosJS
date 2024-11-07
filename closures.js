//Un closure es: una función que recuerda el ámbito en el que fue creada.
//Ejemplo de un closure: 
function saludarFamilia(apellido) {
  return function saludarMiembroFamilia(nombre) {
    console.log(`Hola ${nombre} ${apellido}`);
  }
}
