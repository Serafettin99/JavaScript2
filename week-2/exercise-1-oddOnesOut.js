'use strict';
// Look at the following code snippet:

// function doubleEvenNumbers(numbers) {
//   const newNumbers = [];
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//       newNumbers.push(numbers[i] * 2);
//     }
//   }
//   return newNumbers;
// }
// Logs "[4, 8]" to the console
// The doubleEvenNumbers function returns only the even numbers in the array myNumbers and doubles them. Like you've learned in the README, this block of code isn't easy to decipher.

const myNumbers = [1, 2, 3, 4];

// Let's rewrite it. Using the map and filter functions, rewrite the doubleEvenNumbers function.
function doubleEvenNumbers(numbers) {
  return numbers.filter(number => number % 2 === 0).map(number => number * 2);
}

console.log(doubleEvenNumbers(myNumbers));
