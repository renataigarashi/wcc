//LOOPS

//FOR 

//bloco 1 inicializacao, declara uma variavel e o inicio: cont = 1
//bloco 2 - condicao de parada: contador <= 5;
//bloco 3- incremento e decremento vai contar de 1 a 5: cont++

//for(bloco de inicializacao; bloco de condicional; expressao final (incremento ou decremento))
for(let cont = 1; cont <= 5; cont++) {
    console.log(cont);

    //break - comando para sair do contador
    if(cont === 4) {
        break;
    }
}
console.log();

//
for(let cont = 1; cont <=5; cont++){
    console.log("Renata");
}
console.log();


// Interando com arrays
const meuArray = ["Meu", "nome", "é", "Renata", "!"]

for(let indice = 0; indice < meuArray.length; indice++) {
    console.log(meuArray[indice]);
}

console.log()
console.log("Exemplos com WHILE")
console.log()


//WHILE
let contador = 1;
while(contador <=5) {
    console.log("Meu nome é Renata");
    contador++;
}
console.log();
//tirando a variavel para ser utilizado naquele pedaco de codigo
function repetidorWhile(){
    let contador = 1;
while(contador <=5) {
    console.log("Meu nome é Renata - DENTRO DA FUNCAO");
    contador++;
    }
}
repetidorWhile();
console.log();


//DO WHILE
let contWhile = 1;
do {
    console.log("RENATA - DO WHILE");
    contWhile++;
} while(contWhile<=5);

//CASO COLOCASSE "contWhile=6", ele executa uma vez antes de dar erro. Ele executa e depois verifica a condição

console.log("executando com forEach")
//FOREACH - metodo de array
meuArray.forEach(function(item) {
    console.log(item);
})

//callback - uma funcao que recebe uma função como parametro

console.log("EXEMPLO COM MAP")
//MAP - metodo de array

const arrayComMap = [1, 2, 3, 4, 5, 6, 7];
const arrayComMapAtualizado = arrayComMap.map(function(value){
    return "Meu valor é " + value;
});

console.log(arrayComMapAtualizado);
