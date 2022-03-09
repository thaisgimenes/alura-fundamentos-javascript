//Conversões implicitas

const numero = 456;
const numeroString = "456";

//compara valor 
console.log(numero == numeroString);
//compara valor e tipo da variavel
console.log(numero === numeroString);

//tranformou os valores em string e concatenou os valores
console.log(numero + numeroString);

//Conversões explicitas

//Number()
//String()

console.log(numero + Number(numeroString));