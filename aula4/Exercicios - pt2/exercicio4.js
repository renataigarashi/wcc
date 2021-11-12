//Uma maneira fácil de anexar dados ao final de um array é por meio da `push()`função,`.push()`pega um ou mais *parâmetros* e os "empurra" para o final do array.

//     const arr1 = [1, 2, 3];
//     arr1.push(4);
    
//     const arr2 = ["Fonseca", "Gabriela", "js"];
//     arr2.push(["feliz", "com fome"]);

    
//     `arr1` agora tem o valor `[1, 2, 3, 4]` e `arr2` tem o valor `["Fonseca", "Gabriela", "js", "feliz", "com fome"]`.
    
//     Insira "cachorro" e "brincalhao" no `novoArray`, imprima-o.
    

//     const novoArray = ["gato", "dorminhoco"];

    
//     **Bônus: Você também pode inserir um item no início do array usando `unshift()`**
    

//     const nossoArray = ["Fonseca", "Gabriela", "js"];
//     nossoArray.unshift("women can code");
//     console.log(nossoArray);
//     //["women can code", "Fonseca", "Gabriela", "js"];
   
const novoArray = ["gato", "dorminhoco"];
novoArray.push("cachorro", "brincalhão" );

console.log(novoArray);