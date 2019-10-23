'use strict';
// Write a function called removeDuplicates, that takes in an array as an argument:

let letters = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c', 'b'];
// The function should remove duplicate letters. So the result should be:
// letters === ['a', 'b', 'c', 'd', 'e', 'f'];

// I solved this exercise in three particular ways:

// 1st solution:
function removeDuplicates(array) {
  return array.filter((i, element) => letters.indexOf(i) === element);
}

//2nd solution:
// function removeDuplicates(array) {
//   return array.reduce(
//     (unique, item) => (unique.includes(item) ? unique : [...unique, item]),
//     [],
//   );
// }

// 3rd solution:
// function removeDuplicates(array) {
//   return [...new Set(array)];
// }

letters = removeDuplicates(letters);

console.log(letters);
