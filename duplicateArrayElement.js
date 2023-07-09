const duplicateArray = [2, 4, 5, 2, 7, 8, 5, 8, 9];
const duplicates = duplicateArray.filter((value, index, array) =>
 array.indexOf(value) !== index);
console.log(duplicates);
   