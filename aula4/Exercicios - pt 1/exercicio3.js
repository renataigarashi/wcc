// 1. A segunda maneira de acessar as propriedades de um objeto é a notação de colchetes ( `[]`). Se a propriedade do objeto que você está tentando acessar tiver um espaço em seu nome, você precisará usar a notação de colchetes.
 
//     No entanto, você ainda pode usar a notação de colchetes nas propriedades do objeto sem espaços.
//     Aqui está um exemplo de como usar a notação de colchetes para ler a propriedade de um objeto:
    
//     const meuObjeto = {
//       "Nome com espaco": "Beyonce",
//       "Mais  espaco": "Jay-z",
//       "SemEspaco": "Blue"
//     };
    
//     meuObjeto["Nome com espaco"];
//     meuObjeto['Mais  espaco'];
//     meuObjeto["SemEspaco"];
//     ```
    
//     `meuObjeto["Nome com espaco"]`seria a string `Beyonce`, `meuObjeto['Mais  espaco']`seria a string `Jay-z` e `meuObjeto["SemEspaco"]`seria a string `Blue`.
    
//     Observe que os nomes das propriedades com espaços devem estar entre aspas (simples ou duplas).
    
//     Leia os valores das propriedades `a entrada` e `o drink` do objeto `pedido` uso da notação de colchetes e atribua-os a `valorEntrada` e `valorDrink` respectivamente, por fim, imprima-os.

//     // Setup
//     const pedido = {
//       "a entrada": "hamburger",
//       "o adicional": "vegetais",
//       "o drink": "coca-cola"
//     };
    
//     // Apenas modifique dessa linha para baixo
//     const valorEntrada = pedido;   
//     const valorDrink = pedido;    

const pedido = {
    "a entrada": "hamburger",
    "o adicional": "vegetais",
    "o drink": "coca-cola"
  };
  
  // Apenas modifique dessa linha para baixo
  const valorEntrada = pedido['a entrada'];   
  const valorDrink = pedido["o drink"];  

  console.log(valorEntrada);
  console.log(valorDrink);