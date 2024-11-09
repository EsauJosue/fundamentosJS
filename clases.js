//Una clase es una plantilla para crear objetos.
//En JavaScript, las clases son una forma de definir cómo se deben crear los objetos.
//Las clases son una forma de crear un objeto con atributos y métodos.

class Persona{
    constructor(nombre,edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    saludar(){
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
    }
}
//La palabra reservada new se utiliza para crear un nuevo objeto.
const persona1 = new Persona('Juan', 30);
persona1.saludar();