const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "4521336987",
    email: "andre@email.com",
    fones: ["254489963", "4521116887"],
}

//Adicionando uma nova chave em cliente, que também é um objeto
cliente.dependentes = {
    nome: "Sara",
    parentesco: "Filha",
    dataNasc: "20/03/2011"
}

//Acessando uma chave dentro de outro objeto, realizando uma alteração
cliente.dependentes.nome = "Sara Silva";