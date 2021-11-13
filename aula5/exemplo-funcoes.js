//Funcoes
function nomeFuncao() {
    console.log("Minha primeira função rodou!");
};

nomeFuncao();

//FUNÇÃO COM PARAMETROS

function funcaoComParametro(meuParametro){
    console.log(meuParametro);
}

funcaoComParametro("meu primeiro parametro"); //parametro pode ser de qualquer tipo

funcaoComParametro(24); //parametro pode ser de qualquer tipo (numerico)

funcaoComParametro({nome:"Renata"}); //parametro pode ser de qualquer tipo (objeto)

funcaoComParametro([1, 5, "nome"]); //parametro pode ser de qualquer tipo (Array)


//FUNCAO COM 2 PARAMETRO - separa com virgula o primeiro e segundo parametro
function funcaoComDoisParametro(meuParametro, meuSegundoParametro){
    console.log(meuParametro, meuSegundoParametro);
}

funcaoComDoisParametro(["1", "2, 100"], "meu segundo parametro"); 


//FUNCAO COM RETORNO 
function retornaValor(){
    return "Meu valor retornado"
}

console.log(retornaValor());


//FUNCAO QUE CALCULA SUBTRACAO
function calculaSubtracao(primeiroValor, segundoValor) {
   return primeiroValor - segundoValor;
}

console.log(calculaSubtracao(10,2));


//RETORNANDO VARIAVEIS
function retornaVariavel(valorDaVariavel) {
    const minhaVariavel = valorDaVariavel;
    return minhaVariavel;
}

console.log(retornaVariavel("Meu primeiro retorno com variavel"))


// RETORNOS CONDICIONAIS
function retornoCondicional(valor) {
    if (valor > 200) {
        return "Valor maior que 200"
    } else {
        return "Valor menor que 200"
    }
}

console.log(retornoCondicional(1500));
console.log(retornoCondicional(150));


//RETORNO CONDICIONAL TERNARIO
function retornoCondicionalTernario(valor){
    return valor > 200 ? "Valor maior que 200" : "Valor menor que 200"
}

console.log("Retorno Ternario: " + retornoCondicionalTernario(201));
console.log("Retorno Ternario: " + retornoCondicionalTernario(1));



//retorno da funcao condicional ternario sendo atribuida numa variavel
const resultadoCondicional = retornoCondicionalTernario(400);

console.log("Chamando a funcao ternaria com variavel: " + resultadoCondicional);


// ARROW FUNCTION
const nomeDaArrowFunction = () => {
    return "Minha primeira Arrow Function";
}
console.log (nomeDaArrowFunction());

//ARROW FUNCTION TERNARIO
const retornoCondicionalTernario2 = (valor) => 
    valor > 200 ? "Valor maior que 200" : "Valor menor que 300"; //nesse caso o return ta implicito


const resultado = retornoCondicionalTernario2(30);
console.log("O resultado do retorno condicional ternario 2: " + resultado);