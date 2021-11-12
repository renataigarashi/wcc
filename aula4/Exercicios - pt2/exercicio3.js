// Ao contrário das strings, as entradas dos arrays são *mutáveis* e podem ser alteradas livremente, mesmo que o array tenha sido declarado com `const`.
    
//     const nossoArray = [50, 40, 30];
//     nossoArray[0] = 15;
    
//     `nossoArray`agora tem o valor `[15, 40, 30]`.
    
//     **Nota: Não deve haver nenhum espaço entre o nome do array e os colchetes, como `array [0]`. Embora o JavaScript seja capaz de processar isso corretamente, isso pode confundir outros programadores que estejam lendo seu código**.
    
//     Modifique os dados armazenados no índice `0`de `meuArray` para um valor de `45 e imprima-o.`
    
    const meuArray = [23, 44, 98];

    meuArray[0] = 45;
    console.log(meuArray);

