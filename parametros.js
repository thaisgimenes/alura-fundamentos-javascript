//Parametros de função

function soma(primeiroNum, segundoNum){
    return primeiroNum + segundoNum;
}

//A função recebe argumentos 
console.log(soma(10, 5));

//A ordem dos parametros é importante 

//Definindo um valor default para os parametros
function multiplica(numero1 = 1, numero2 = 1){
    return numero1 * numero2;
}

console.log(multiplica(soma(4, 5), soma(3, 3)));