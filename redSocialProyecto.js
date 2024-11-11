/*
Requerimientos del reto:
1. El usuario debe poder ingresar su usuario y contraseña.
2. El sistema debe ser capaz de validar si el usuario y contraseña son correctos.
3. Si el usuario y contraseña son correctos, el sistema debe mostrar un mensaje de bienvenida y mostrar el timeline del usuario. 
4. Si el usuario y contraseña son incorrectos, el sistema debe mostrar un mensaje de error y no se mostrará el timeline.
*/

const userDatabase = [
    {
        username: "Andres",
        password: "123",
    },
    {
        username: "Caro",
        password: "456",
    },
    {
        username: "Mariana",
        password: "789",
    }
];
const usersTmeLine = [
    {
        username: "Estefany",
        timeline: "Me encanta JavaScript"
    },
    {
        username: "Oscar",
        timeline: "Debeloper es lo mejor"
    },
    {
        username: "Andres",
        timeline: "A mi me gusta mas el café que el té"
    },
    {
        username: "Andres",
        timeline: "Yo hoy no quiero trabajar"
    }
];

//Solicitando datos al usuario
const username = prompt("Ingresa tu usuario");
const password = prompt("Ingresa tu contraseña");

//Validando usuario y contraseña

function usuarioExistente(username, password){
    for (let i = 0; i < userDatabase.length; i++){
        if (userDatabase[i].username === username && userDatabase[i].password === password){
            return true;
        }
    }
}

// const user = userDatabase.find(user => user.username === username && user.password === password);

if(usuarioExistente(username, password)){
    console.log("Bienvenido " + username);
   for (let i = 0; i < usersTmeLine.length; i++){
       if (usersTmeLine[i].username === username){
           console.log(usersTmeLine[i].timeline);
       }
   }
}else{
    console.log("Usuario o contraseña incorrectos");
}