// Agora que aprendemos como criar, passar argumentos, retornar e atribuir valores com funções, vamos testar nossos conhecimentos! Vamos construir uma função `validaMaioridade` para validar se o ano de nascimento fornecido corresponde a uma pessoa com mais de 18 e assim seja liberada ou não a entrada dela em um determinado show.
//     1. Receba um parâmetro numérico `anoNascimento` ;
//     2. Valide se, pela data de nascimento, se trata de alguém com maior de 18 anos;
//     3. Se for maior que 18 anos, retorne uma `string` dizendo `"Liberação autorizada"`;
//     4. Se for igual a 18 anos, retorne uma `string` dizendo `"Validar documento de identidade"`;
//     5. Se for menor de 18 anos, retorne uma `string` dizendo `"ATENÇÃO: Liberação NÃO autorizada"`;
//     6. Atribua o retorno a uma variável chamada `resultado` e imprima-a.

function validaMaioridade(anoNascimento) {
    let idade = 2021 - anoNascimento;

    if (idade > 18) {
        return "Liberação autorizada";
    } else if (idade = 18) {
        return "Validar documento de identidade";
    } else {
        return "Liberação NÃO autorizada";
    }
}

const resultado = validaMaioridade(2018);
console.log(resultado);