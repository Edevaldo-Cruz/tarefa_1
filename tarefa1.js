var lista1 = [5, 1, 22, 25, 6, -1, 8, 10];
var lista2 = [1, 6, -1, 10];

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
