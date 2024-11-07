/*

fon in -> es para objetos iterables
propiedades  = valor 

*/
const listaDeCompras = {
    manzana: 5,
    pera: 3,
    uva: 2,
    sandia: 1,
    melon: 2,
    platano: 4,
    kiwi: 3,
    fresa: 5,
    mango: 2,
    papaya: 1
};

// for(fruta in listaDeCompras){
//     console.log(fruta);
// }

for(fruta in listaDeCompras){
    console.log(`${fruta}: ${listaDeCompras[fruta]}`);
}

for(fruta of listaDeCompras){ //Aqui no se puede usar el of porque no es un objeto iterable, es decir no es un array o un string
    console.log(fruta);
}
//Los objetos iterables son los arrays y los strings
//los objetos enumerables solo son los objetos