//Tipos null e undefined

//null é a ausencia de valor

let input = null;

if (input === null) {
 console.log('não há informação');
} else {
 console.log(input);
}

//undefined quando um valor não é inicializado

let input = null;
let input2;

console.log(input); // null
console.log(input2); // undefined

//null é um valor atribuído a uma variável que existe e foi iniciada, undefined se refere ao valor de uma variável que não foi inicializada (ou seja, não foi atribuído nenhum valor a ela).
