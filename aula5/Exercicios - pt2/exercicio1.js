// const valoresNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function criaPares() {
//     for(let i = 0; i < valoresNum.length; i++){
//         if (valoresNum[i] % 2 === 0){
//             console.log(valoresNum[i]);
//         }
//     }
// }
// criaPares();

function criaPares(valoresNum){
    for(let cont=0; cont < valoresNum.length; cont++){
        const meuItemAtual = valoresNum[cont]; //para ficar mais facil entender
        if(meuItemAtual % 2 === 0){
            console.log(valoresNum[cont]);
        }
    }
}

const valoresNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
criaPares(valoresNum);