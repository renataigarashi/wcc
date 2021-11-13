// Podemos passar valores para uma função através de argumentos, como vimos no exercício anterior. Você pode usar uma instrução return para enviar um valor de volta de uma função, ou seja, retorna-lo. Exemplo:
    
//     function somaTres(numero) {
//       return numero + 3;
//     }
    
//     const resultado = somaTres(5);
    
//     `resultado` tem o valor 8.
    
//     `somaTres` recebe um argumento `numero` e retorna um valor igual a `numero + 3`
    
//     Crie uma função `multiplicaPorCinco` que aceite um argumento, multiplique-o por `5`e retorne o novo valor.

function multiplicaPorCinco(num) {
    return num * 5;
}

const resultado = multiplicaPorCinco(20);
console.log(`Resultado: ${resultado}`);