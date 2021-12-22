var lista = ["g", "g", "y", "c", "c", "c", "q", "c", "y", "y"];

/*
    Nessa tarefa criei uma função para filtrar elementos duplicados em sequência.

    Usei for para percorrer todo array e um if para analisar se um elemento é diferente do próximo.
    elemento, se atender a essa situação, o elemento era incluído em um novo array chamado de result.  
*/

function removerDuplicados(array) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] !== array[i + 1]) {
      result.push(array[i]);
    }
  }
  return result;
}

let result = removerDuplicados(lista);
console.log(result);
