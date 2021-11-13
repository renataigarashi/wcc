// Você deve se lembrar que conseguimos atribuir valores para variáveis, certo? Uma coisa legal que Javascript nos permite, é atribuir o retorno de uma função para uma variável, vamos ver como:
    
//     Suponha que temos uma função predefinida `calculaSoma` que adiciona dois números, então:
    
//     resultadoSoma = calculaSoma(5, 12);
    
//     Esse trecho irá chamar a função `calculaSoma`, que retorna um valor de `17` e o atribui à variável `resultadoSoma`. Legal, não?
    
//     let resultado = 0;
    
//     function processaParametros(numero) {
//       return (numero + 3) / 5;
//     }
    
//     Chame a função `processaParametros` com um argumento `7` e atribua seu valor de retorno à variável `resultado`;

let resultado = 0;

function processaParametros(numero) {
    return (numero + 3) / 5;
  }

resultado = processaParametros(7);
console.log(`O resultado é: ${resultado}`);
