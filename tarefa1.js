var lista1 = [5, 1, 22, 25, 6, -1, 8, 10];
var lista2 = [1, 6, -1, 10];

/* Criei uma função para filtrar elementos repetidos e incluir em um novo array chamado result. 
    
    Nessa função, usei o for para criar laços de repetições usando como limitador o tamanho do 
    próprio array.
    
    E usei um if para comparar todas as posições dos arrays e incluir elementos repedidos na variável result 
    caso houvesse. 
*/

function duplicados(array1, array2) {
  var result = [];
  for (var i = 0; i < array1.length; i++) {
    for (var j = 0; j < array2.length; j++) {
      if (array1[i] == array2[j]) {
        result.push(array1[i]);
      }
    }
  }
  return result;
}

/*
    Na segunda função criei para comparar se o novo array result é idêntico ao array lista2.
    
    Usei um if para determinar se o tamanho dos arrays são iguais.
    
    Em seguida usei um for para criar um laço de repetição, para conseguir analisar todas as posições.
    
    Na linha 41 usei mais um if para saber se cada elemento fornecido pelo for é diferente, 
    nessa função é comparado se o elemento da posição zero é diferente ao outro elemento da posição zero, ou 
    seja estou analisando se os arrays são idênticos, caso atenda a essa situação, o if retornaria falso.
    
    Se os if's não fosse atendido, retornaria verdadeiro. 
*/

function arraysAreIdentical(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (var i = 0, len = arr1.length; i < len; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

let result = duplicados(lista1, lista2);
let result2 = arraysAreIdentical(result, lista2);
console.log(result2);
