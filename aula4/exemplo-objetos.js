//OBJETOS

//sintaxe básica
const meuPrimeiroObjeto = {};


//Inserindo Dados, formato chave:valor
const meuCarro = {
    modelo: "Renault Kwid",
    cor: "Branco",
    ano: 2019,
    ehNovo: false
}


//Acessar uma propriedade do objeto: nomeObj.propriedade
console.log(meuCarro.modelo)
console.log("Meu carro é novo?", meuCarro.ehNovo);


//Verificando se um propriedade existe: nomeObj["propriedade"]
console.log(meuCarro["temSeguro"]);


//Acessar propriedade com variaveis: 
const modeloCarro = "modelo";
console.log(meuCarro[modeloCarro]); //meuCarro.modelo ou meuCarro["modelo"]


//Colocando novo valor no objeto nomeObj.propriedade = valor;
meuCarro.temSeguro = true;
console.log(meuCarro);


//Atualizando valor de uma propriedade
meuCarro.ano = 2021;
console.log(meuCarro);


// Deletar propriedade de um objeto: delete propriedade.valor
delete meuCarro.cor;
console.log(meuCarro);

