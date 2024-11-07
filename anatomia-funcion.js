function calcularDescuento(precio, descuento) {
    return (precio * descuento) / 100;

}
const precioOriginal = parseInt(prompt('Ingresa el precio original'));
const descuento = parseInt(prompt('Ingresa el descuento'));
const precioConDescuento = precioOriginal - calcularDescuento(precioOriginal, descuento);
console.log(precioConDescuento);

console.log(typeof calcularDescuento);