//var

var altura = 5;
var comprimento = 7;

area = altura * comprimento;

console.log(area);

//Pode ser declarada após o uso
var area;

 //let
 
 let forma = "retangulo";
 let alturaLet = 5;
 let comprimentoLet = 7;
 //Deve ser declarada antes do uso
 let areaLet;

 if (forma === "retangulo"){
     areaLet = alturaLet * comprimentoLet;
 } else{
     areaLet = (alturaLet * comprimentoLet) / 2;
 }

  console.log(areaLet);

//const

const forma = "quadrado";
const alturaConst = 5;
const comprimentoConst = 7;

//A variavel const é um tipo de constante, por essa razão não pode ser modificada ao longo da execução do programa
let areaLet;

const areaConst = alturaConst * comprimentoConst;

if (forma === "quadrado"){
    areaLet = alturaConst * comprimentoConst;
} else{
    areaLet = (alturaConst * comprimentoConst)/2;
}

console.log(areaLet);
