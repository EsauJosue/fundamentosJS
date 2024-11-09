
function Inventario(nombre){
    this.nombre = nombre;
    this.articulos = {};
}
Inventario.prototype = {
    add : function (nombre,cantidad){
        this.articulos[nombre] = cantidad;
    },
    borrar : function (nombre){
        delete this.articulos[nombre];
    },
    cantidad : function (nombre){
        return this.articulos[nombre];
    },
    getNombre : function (){
        return this.nombre;
    },

};

// const libros = inventario('libros');
// libros.add('JavaScript', 10);
// libros.add('Angular', 5);
// libros.add('React', 15);
// libros.borrar('React');
// console.log(libros.cantidad('React'));
const libros = new Inventario('libros');
const discos = new Inventario('discos');
const juegos = new Inventario('juegos');
const peliculas = new Inventario('peliculas');
const comics = new Inventario('comics');
libros.add('JavaScript', 10);

Inventario.prototype.correr = function(){
    console.log('Corriendo');
};