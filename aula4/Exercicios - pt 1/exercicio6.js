// 6. Depois de criar um objeto JavaScript, você pode atualizar suas propriedades a qualquer momento, da mesma forma que atualizaria qualquer outra variável. Você pode usar a notação de ponto ou colchete para atualizar.

// Por exemplo, vejamos `gato`:

// const gato = {
//   "nome": "Whiskers",
//   "patas": 4,
//   "caudas": 1,
//   "principalInimigo": "água",
// };

// gato.nome = "Bichano";

// Depois dessa última linha, teríamos o seguinte resultado

// const gato = {
//   "nome": "Bichano",
//   "patas": 4,
//   "caudas": 1,
//   "principalInimigo": "água",
// };

// Altere a propriedade nome do objeto `meuCachorro` definindo-a como "Pluto". Imprima o objeto em seguida.

const meuCachorro = {
    nome: "Zezinho",
    patas: 4,
    caudas: 1,
    principalAmigo: "Renata"
};

meuCachorro.nome = "Pluto";
console.log(meuCachorro)