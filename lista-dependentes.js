//Chave dependentes é um array com objetos
const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "4521336987",
    email: "andre@email.com",
    fones: ["254489963", "4521116887"],
    dependentes: [{
        nome: "Sara",
        parentesco: "Filha",
        dataNasc: "20/03/2011"
    }]
}

//Adicionando um novo objeto no array dependentes
cliente.dependentes.push({
    nome: "Samia Maria",
    parentesco: "Filha",
    dataNasc: "04/01/2014"
});

//Utilizando o método filter, pois o dependentes é um array
//Filtrando para cada objeto do array pela chave data de nascimento
const filhaMaisNova = cliente.dependentes.filter(dependente => dependente.dataNasc === "04/01/2014");

console.log(filhaMaisNova[0].nome);

