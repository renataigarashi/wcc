
// Crie variáveis para cada uma das comparações e imprima o resultado delas. 

// a. 5 é maior que 1
// b. 2000000 é menor que 3000000000
// c. "Banana" é igual a "Banana"
// d. "50" é estritamente igual a 50
// e. "Carro" é diferente de "bicicleta"
// f. 50 é maior que 27
// g. 975 é menor ou igual a 1200


// Item a
var ehMaior = 5;

ehMaior > 1 ? console.log(`${ehMaior} é maior que 1`) : console.log(`${ehMaior} é menor que 1`);


// Item b
var ehMenor = 2000000;

if (ehMenor < 3000000000) {
    console.log(`${ehMenor} é menor que 3000000000`)
} else {
    console.log(`${ehMenor} não é menor que 3000000000`)
}


// Item c
var fruta = "Banana";
fruta == "Banana" ? console.log(`"${fruta}" é igual "Banana"`) : console.log(`${fruta} não é igual "Banana"`);


// Item d
var num = 50;

num === 50 ? console.log(`"${num}" é estritamente igual a 50`) : console.log(`${num} NÃO é estritamente igual a 50`);


// Item e 
var veiculo1 = "Carro";
var veiculo2 = "bicicleta"

veiculo1 != veiculo2 ? console.log(`"${veiculo1}" é diferente de "${veiculo2}"`) : console.log(`"${veiculo1}" é igual e "${veiculo2}"`) 

//Item f
var num1 = 50;
var num2 = 27;

if(num1 > num2) {
    console.log(`${num1} é maior que ${num2}`) 
} else {
    console.log(`${num1} não é maior que ${num2}`) 
}


// Item g
var numero1 = 975
var numero2 = 1200;

numero1 <= numero2 ? console.log(`${numero1} é menor ou igual ${numero2}`) : console.log(`${numero1} é maior ou igual ${numero2}`)



