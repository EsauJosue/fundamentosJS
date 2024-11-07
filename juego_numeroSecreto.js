const numeroSecreto = Math.floor(Math.random() * 5) + 1;
const numeroJugador = parseInt(prompt("Adivina el número secreto (entre 1 y 5)"));
if(numeroJugador === numeroSecreto){
    console.log("Adivinaste el número secreto");
}else{
    console.log(`Lo siento, el número secreto era ${numeroSecreto}`);
}   
