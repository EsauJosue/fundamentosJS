//Operadores de comparación 
//Comparación de igualdad
// == Operador de igualdad
console.log(5 == 5); //true
console.log(5 == "5"); //true
console.log(5 == 6); //false
// === Operador de identidad
console.log(5 === 5); //true
console.log(5 === "5"); //false
console.log(5 === 6); //false
//Comparación de desigualdad
// != Operador de desigualdad
console.log(5 != 5); //false
console.log(5 != "5"); //false
console.log(5 != 6); //true
// !== Operador de no identidad. El operador !== es el opuesto al operador ===, si los valores son diferentes y de diferente tipo, entonces devuelve true, de lo contrario devuelve false.
console.log(5 !== 5); //false
console.log(5 !== "5"); //true
console.log(5 !== 6); //true
//Comparación de desigualdad estricta
// !== Operador de desigualdad estricta
console.log(5 !== 5); //false
console.log(5 !== "5"); //true
console.log(5 !== 6); //true
// > Operador mayor que
console.log(5 > 5); //false
console.log(5 > 4); //true
console.log(5 > 6); //false
// >= Operador mayor o igual que
console.log(5 >= 5); //true
console.log(5 >= 4); //true
console.log(5 >= 6); //false
// < Operador menor que
console.log(5 < 5); //false
console.log(5 < 4); //false
console.log(5 < 6); //true
// <= Operador menor o igual que
console.log(5 <= 5); //true
console.log(5 <= 4); //false
console.log(5 <= 6); //true
//Comparación de cadenas
console.log("a" < "b"); //true
console.log("a" < "A"); //false
console.log("a" < "aa"); //true
//Comparación de valores booleanos
console.log(true == 1); //true
console.log(false == 0); //true
console.log(true == 0); //false
console.log(false == 1); //false
console.log(true === 1); //false
console.log(false === 0); //false
console.log(true === 0); //false
console.log(false === 1); //false
//Comparación de valores nulos y undefined
console.log(null == undefined); //true
console.log(null === undefined); //false
console.log(null == null); //true
console.log(undefined == undefined); //true
//Comparación de objetos
let obj1 = {};
let obj2 = {};
console.log(obj1 == obj2); //false
//Explicación: Los objetos son comparados por referencia, no por valor. En este caso, obj1 y obj2 son dos objetos diferentes, por lo que la comparación devuelve false.
 