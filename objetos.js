//Un objeto es una colección de propiedades, y una propiedad es una asociación entre un nombre (o clave) y un valor. Un valor de propiedad puede ser una función, que es entonces conocida como un método del objeto. Además de los objetos que están predefinidos en el navegador, puedes definir tus propios objetos.

// Crear un objeto
// Puedes crear un objeto con el siguiente código:

const persona = {
    nombre: 'Juan',
    edad: 25,
    direccion: {
        ciudad: 'Buenos Aires',
        pais: 'Argentina'
    },
    saludar: function() {
        console.log('Hola', persona.nombre);
    }
}

console.log(persona.saludar());

//Un objeto puede contener cualquier tipo de datos, incluyendo otros objetos y métodos o funciones. En el ejemplo anterior, el objeto persona tiene dos propiedades: nombre y edad, y un método saludar.

//Agregando una nueva propiedad al objeto

persona.tel = '123456789';
console.log(persona);

//Agregando un nuevo método al objeto

persona.despedirse = function() {
    console.log('Chau', persona.nombre);
}

console.log(persona);

//Borrando una propiedad del objeto

delete persona.tel;
console.log(persona);