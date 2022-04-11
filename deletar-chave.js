const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20",
    aliado: {
      nome: "Saruman",
      classe: "mago"
    },
    status: "desaparecido"
}

//Deletando uma chave e suas informações contidas
delete objPersonagem.aliado;

console.log(objPersonagem.aliado); //undefined