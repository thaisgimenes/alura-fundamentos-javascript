//Criação do objeto CLIENTE
const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "4521336987",
    email: "andre@email.com"
}

//Nome do objeto (.) a chave desejada, utilizando notação de ponto
console.log(cliente.nome);

//Utilizando o template string e a notação de ponto
console.log(`Meu nome é ${cliente.nome} e tenho ${cliente.idade} anos.`);

//Utilizando o substring para exbir apenas uma parte de uma informação
console.log(cliente.cpf.substring(0, 3));

