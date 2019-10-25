'use strict';
// Don't you just love the thrill of the lottery? What if I told you we can make our own lottery machine? Let's get started!
// Write a function that takes 4 arguments.
// A start value
// An end value
// A callback that executes if the number is divisible by 3
// A callback that executes if the number is divisible by 5
// The function should first generate an array containing values from start value to end value (inclusive).
// Then the function should take the newly created array and iterate over it, and calling the first callback if the array value is divisible by 3.
// The function should call the second callback if the array value is divisible by 5.
// Both functions should be called if the array value is divisible by both 3 and 5.
// Here is a starter template:

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const numberArray = [];
  for (let i = startIndex; i <= stopIndex; i++) {
    numberArray.push(i);
  }

  console.log(numberArray);

  numberArray.forEach(number => {
    if (number % 5 === 0) {
      fiveCallback(numberArray);
    }
    if (number % 3 === 0) {
      threeCallback(numberArray);
    }
  });
}

function sayThree(numbers) {
  console.log(
    `Your number ${numbers.filter(number => number % 3 === 0).join(', ')} is divisible by 3.`,
  );
}

function sayFive(numbers) {
  console.log(
    `Your number ${numbers.filter(number => number % 5 === 0).join(', ')} is divisible by 5.`,
  );
}

threeFive(10, 15, sayThree, sayFive);
