const lista = ["arara", "jabuticaba", "asa", "caminhao"];
const palindromo = (str) => str === str.split("").reverse().join("");
const resultados = lista.map(palindromo);
console.log(resultados);

/*
    Criei uma constante para guardar uma regra.
    Essa regra diz que iria receber uma string, dividi-la salvando em uma variável, invertê-la, 
    reconstruí-la e compará-la com a string original e dizer se elas são idênticas.
    
    Em seguida, criei uma constante que recebe um map, para percorrer o array lista e aplicar a
    regra da variável palíndromo. 

*/
