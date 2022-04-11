//Criando uma função dentro de um objeto
//Funções adicionam ações a um objeto
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
    },
    {
        nome: "Samia Maria",
        parentesco: "Filha",
        dataNasc: "04/01/2014"
    }],
    saldo: 100,
    depositar: function(valor){
        this.saldo += valor;
    }
}

console.log(cliente.saldo);

//Executando a função para depositar
cliente.depositar(30);

console.log(cliente.saldo);