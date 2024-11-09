class Animal{
    constructor(tipo){
        this.tipo = tipo;
    }
    emitirSonido(){
        console.log('Sonido de animal');
    }
}

class Perro extends Animal{
    constructor(nombre,raza,tipo){
        super(tipo);
        this.nombre = nombre;
        this.raza = raza;
    }
    sonidoPerro(){
        console.log('Guau guau');
    }
}

perro1 = new Perro('Firulais','Montes','Canino');
console.log(perro1);