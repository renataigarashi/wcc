const meuArrayStrings = ["Renata", "Igarashi", "Maringa"];

const meuArrayNumeros = [10, 20, 30, 100, 765, 10];

const meuArrayBooleanos = [true, false, true];

const meuArrayObjetos = [
    {
        nome: "Renata",
        idade: 38
    }, {
        profissao: "Webdesigner",
        empresa: "RSI CO"
    }, {}, {}
]

const arrayTiposDiferentes = ["Abacaxi", 700, true, {estado: "Parana"}];

//como pegar um objeto do array: nome do array e o indice entre chave: array[0]
console.log(arrayTiposDiferentes[1]);


// tamanho do array: array.lenght
console.log (arrayTiposDiferentes.length);


// ultimo item do array
const tamanhoArrayTiposDiferentes = arrayTiposDiferentes.length;
const indiceUltimoItem = tamanhoArrayTiposDiferentes - 1;

console.log(arrayTiposDiferentes[indiceUltimoItem]);


//manipulacao de array: novo item 
arrayTiposDiferentes.push("Hello"); //push sempre adiciona o item na ultima posição
console.log(arrayTiposDiferentes);

arrayTiposDiferentes.push(500);
console.log(arrayTiposDiferentes);


//colocando item no começo do array
arrayTiposDiferentes.unshift("Quinta-feira"); //unshift adiciona item na primeira posição do array
console.log(arrayTiposDiferentes);


//colocando um item no array numa posição especifica
arrayTiposDiferentes[3] = "Fone de ouvido"; //quando o indice é especificado, no exemplo, o item 3 vai ser sobreescrevido
console.log(arrayTiposDiferentes);


//colocando um item no array numa posicao especifica sem sobrescrever o array
arrayTiposDiferentes.splice(3,0, "testando");
console.log(arrayTiposDiferentes);
// Exemplo: 
// list.splice(1, 0, "baz"); // na posição de índice 1, remova 0 elementos e adicione "baz" a essa posição
// From Pati Bueno to Everyone 09:52 PM
// var list = ["foo", "bar"];
// list.splice(1, 0, "baz"); // na posição de índice 1, remova 0 elementos e adicione "baz" a essa posição
// // o elemento "barra" agora será movido automaticamente para a posição de índice 2
// ["foo", "baz", "bar"] // resultado



//tirando item do array
arrayTiposDiferentes.pop(); //pop tira o ultimo item
console.log(arrayTiposDiferentes);

arrayTiposDiferentes.shift(); //shift tira o primeiro item
console.log(arrayTiposDiferentes);


//descobrir item do array sem ser diretamente pela posição: Em qual posicao do meu array ta o item "tal"
console.log(arrayTiposDiferentes.indexOf("Fone de ouvido"));



// excluir por indice específico: splice => array.splice(), primeiro parametro: posicao que quer deletar, segundo parametro:
arrayTiposDiferentes.splice(3, 1);
console.log(arrayTiposDiferentes)


// LISTA 2 = https://faithful-ptarmigan-b0c.notion.site/Exerc-cios-pt-2-cf9ca601e0d94676a9f05ecf54886add