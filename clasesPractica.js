class Usuario {
    constructor(nombre, email ){
        this.nombre = nombre; 
        this.email = email; 
    }
}
class Medico extends Usuario{
    constructor (nombre, email, cedula, especialidad){
        super(nombre, email);
        this.cedula = cedula;
        this.especialidad = especialidad
    }
    
}
const funcionesMedico = {
    saludar: function(){
        console.log(`Hola soy ${this.nombre} y soy ${this.especialidad}`);
    },
    despedir: function(){
        console.log(`Hasta luego`);
    }
}

Object.assign(Medico.prototype, funcionesMedico);


const medico1 = new Medico("Josue","josue@jmcsoluciones.com","CED12364980","Cardiológo");
medico1.saludar();
medico1.despedir();