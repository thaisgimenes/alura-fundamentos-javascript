//Criando um objeto com um array de telefones
const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "4521336987",
    email: "andre@email.com",
    fones: ["254489963", "4521116887"]
}

//Exibindo os telefones de um cliente, utilizando método forEach
cliente.fones.forEach(fone => console.log(fone));

