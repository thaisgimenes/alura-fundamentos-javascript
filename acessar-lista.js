const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "4521336987",
    email: "andre@email.com"
}

//Array com as chaves do objeto
const chaves = ["nome", "idade", "cpf", "email"];

//Utilizando colchetes para chamar uma chave de informação, neste caso, o nome
console.log(cliente[chaves[0]]);

//Para cada posição info, exibindo todas as informações
chaves.forEach(info => console.log(cliente[info]));

//Também é uma forma de utilizar a notação de colchetes, quando se sabe a chave a ser exibida
console.log(cliente["nome"]);