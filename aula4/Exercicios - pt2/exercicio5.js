//  Outra maneira de alterar os dados em um array é com a `.pop()`função.
    
//     `.pop()`é usado para retirar um valor do final de uma matriz. Podemos armazenar esse valor destacado atribuindo-o a uma variável. Em outras palavras, `.pop()`remove o último elemento de uma matriz e retorna esse elemento. Qualquer tipo de entrada pode ser retirado de um array - números, strings e até mesmo arrays aninhados.
    
//     const meuArray = [1, 4, 6];
//     const meuArrayAtualizado = meuArray.pop();
//     console.log(meuArrayAtualizado);
//     console.log(meuArray);
    
//     O primeiro `console.log`exibirá o valor `6`e o segundo exibirá o valor `[1, 4]`.
    
//     Use a `.pop()`função para remover o último item `meuArray` e atribuir o valor exibido a uma nova variável `removidoDoArray`, imprima ambos.
    
//     const nossoArray = ["Fonseca", "Gabriela", "js"];
    
//     **Bônus: Você também pode remover um item no início do array usando `shift()`**
    
//     const nossoArray = ["Fonseca", "Gabriela", "js"];
//     const removidoInicio = nossoArray.shift();
//     console.log(removidoInicio)
//     // ["Gabriela", "js"];

const nossoArray = ["Fonseca", "Gabriela", "js"]
const removidoDoArray = nossoArray.pop();

console.log(removidoDoArray);
console.log(nossoArray);


