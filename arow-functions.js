const saludo = function(nombre) {
  return `Hola ${nombre}`; 
}
console.log(saludo('Josué')); // Hola Josué

const saludoArrow = (nombre) => {
    return `Hola ${nombre}`; 
  }
console.log(saludoArrow('Josué'));

const saludoArrowUnaLinea = nombre => `Hola ${nombre}`;
