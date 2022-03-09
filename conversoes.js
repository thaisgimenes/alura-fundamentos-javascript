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

// teremos a conversão do número 12341234 para uma string “12341234” e assim poderemos fazer a concatenação entre as strings
let telefone = 12341234;
console.log("O telefone é " + String(telefone));

// o .toString() é uma outra forma para  fazer essa conversão, que é mais parecida com outras linguagens de programação.
let telefone = 12341234;
console.log("O telefone é " + telefone.toString()); 
