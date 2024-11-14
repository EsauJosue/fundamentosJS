//Una promesa es un objeto que representa la terminación o el fracaso de una operación asíncrona.
//Una promesa es un objeto devuelto al cuál se adjuntan funciones callback, en lugar de pasar callbacks a una función.  
//Las promesas tienen dos resultados posibles: una promesa puede ser cumplida con un valor o razón de rechazo (error).
//Las promesas son objetos de primera clase, que se pueden pasar como argumentos.
//Las promesas son instancias de la clase Promise.
//Las promesas tienen tres estados: pendiente, cumplida y rechazada.
//Las promesas se pueden encadenar con el método .then().
//Las promesas tienen un método .catch() para manejar errores.
//Las promesas tienen un método .finally() que se ejecuta independientemente del resultado.
//Las promesas se pueden pasar como argumentos a funciones async.
//Las promesas se pueden consumir con la sintaxis async/await.

//Ejemplo de promesa
// un callback es una función que se pasa como argumento a otra función y se ejecuta después de que algo sucede.

const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve();
    }, 2000);
});

promesa.then(() => { //Con then se ejecuta la promesa, nosotros indicamos que hacer cuando se cumpla la promesa.
    console.log('Then de la promesa');
}   );

promesa.catch(() => { //Con catch se ejecuta la promesa, nosotros indicamos que hacer cuando se rechace la promesa.
    console.log('Catch de la promesa');
});

promesa.finally(() => { //Con finally se ejecuta la promesa, nosotros indicamos que hacer cuando se cumpla o rechace la promesa.
    console.log('Finally de la promesa');
}   );

