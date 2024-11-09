class Usuario{ //Se crea la clase padre
    constructor(nombre, edad, estatura, peso, telefono){
       this.nombre = nombre; 
       this.edad = edad;
       this.estatura= estatura;
       this.peso = peso;
       this.telefono = telefono; 
    }
}

class Medico extends Usuario{ //Se crea la clase hija
    constructor(nombre,edad,estatura,peso,telefono,cedula, especialidad, consultorio){
       super(nombre,edad,estatura,peso, telefono);
       this.cedula = cedula;
       this.especialidad = especialidad; 
       this.consultorio = consultorio;
    }
    getMedico(){ //Método para imprimir los datos del médico
       const datos ={
              nombre: this.nombre,
              edad: this.edad,
              estatura: this.estatura,
              peso: this.peso,
              telefono: this.telefono,
              cedula: this.cedula,
              especialidad: this.especialidad,
              consultorio: this.consultorio
       }
         console.table(datos);
    }
   
}
class Paciente extends Usuario{ //Se crea la clase hija
    constructor(nombre,edad,estatura,peso,telefono,numeroHistoriaClinica){
        super(nombre,edad,estatura,peso,telefono);
        this.numeroHistoriaClinica = numeroHistoriaClinica;
    }
}

//Instancias o creación de objetos
const medico1 = new Medico('Juan', 30, 1.70, 70, '123456', '123456', 'Cardiologo', 'Consultorio 1');
const paciente1 = new Paciente('Pedro', 40, 1.80, 80, '4493862691', 'NS-123456');

//Funciones Prototype
Medico.prototype.agendarCita = function(medico, paciente){
    console.log(`El medico ${medico.nombre} agendo una cita con el paciente ${paciente.nombre}`);
    //Imprimir datos del medico
    medico.getMedico();

}

medico1.agendarCita(medico1, paciente1);