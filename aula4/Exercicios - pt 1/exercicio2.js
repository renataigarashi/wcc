// 1. Existem duas maneiras de acessar as propriedades de um objeto: notação de ponto ( `.`) e notação de colchetes ( `[]`). A notação de pontos é o que você usa quando sabe o nome da propriedade que está tentando acessar com antecedência. Aqui está um exemplo de como usar a notação de ponto ( `.`) para ler a propriedade de um objeto:

// const meuObj = {
//   prop1: "val1",
//   prop2: "val2"
// };

// const primeiraProp = meuObj.prop1;
// const segundaProp = meuObj.prop2;

// `primeiraProp` teria um valor da string `val1`e `segundaProp` teria um valor da string `val2`.

// Leia os valores de propriedade de `roupas` usando a notação de ponto. Defina a variável `valorChapeu` igual à propriedade do objeto `chapeu` e defina a variável `valorCamiseta` igual à propriedade do objeto `camiseta`.

// // Setup
// const roupas = {
//   "chapeu": "bone",
//   "camiseta": "camiseta do batman",
//   "sapatos": "tenis da nike"
// };

// // Apenas modifique dessa linha para baixo
// const valorChapeu = roupas;     
// const valorCamiseta = roupas; 

// console.log(valorChapeu);
// console.log(valorCamiseta);


const roupas = {
    chapeu: "bone",
    camiseta: "camiseta do batman",
    sapatos: "tenis da nike"
  };

  const valorChapeu = roupas.chapeu;
  const valorCamiseta = roupas["camiseta"];

console.log(valorChapeu);
console.log(valorCamiseta);