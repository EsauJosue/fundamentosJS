//Un constructor es una función que se ejecuta al momento de instanciar una clase. 
//En JavaScript, el constructor es un método especial para crear e inicializar un objeto creado a partir de una clase.

// function Persona(nombre, apellido, edad){
//     this.nombre = nombre;
//     this.apellido = apellido;
//     this.edad = edad;
// }

// const persona1 = new Persona('Juan', 'Perez', 30);
// console.table(persona1);

//De esta manera se puede crear un objeto con los atributos que se le pasen al constructor.
//En este caso, se creó un objeto persona1 con los atributos nombre, apellido y edad.

//Para agregar una nueva propiedad al objeto, se puede hacer de la siguiente manera usando prototype:

// Persona.prototype.direccion = 'San Jose';

//Prototype es un objeto que se encuentra en todas las funciones de JavaScript.
//Se puede agregar propiedades o métodos a un objeto existente en JavaScript.
//Prototype crea una copia del objeto y se le agrega la propiedad o método que se desee.
//Protoype sirve para 

//En caso de que se requiera agregar un atributo en un objeto específico, se puede hacer de la siguiente manera:

// persona1.telefono = '12345678';
// console.table(persona1);

//Creando un closure
//Un closure es una función que recuerda el entorno en el que fue creada.

function inventario(nombre){
    let _nombre = nombre;
    const _articulos = {};
    function add(nombre,cantidad){
        _articulos[nombre] = cantidad;
    }
    function borrar(nombre){
        //delete es una palabra reservada de JavaScript que se utiliza para eliminar una propiedad de un objeto.
        delete _articulos[nombre];

    }
    function cantidad(nombre){
        return _articulos[nombre];
        //Esta línea de código retorna la cantidad de un artículo específico.
    }
    function nombre(){
        return _nombre;
        //Esta línea de código retorna el nombre del inventario.
    }   
    return { //Se retorna un objeto con las funciones add, borrar, cantidad y nombre.
        add,
        borrar,
        cantidad,
        nombre
    };
}

const libros = inventario('libros');
libros.add('JavaScript', 10);
libros.add('Angular', 5);
libros.add('React', 15);
libros.borrar('React');
console.log(libros.cantidad('React'));





