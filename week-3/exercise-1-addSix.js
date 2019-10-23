'use strict';
// Declare a function called createBase. It should return a closure, that adds a number to the base number argument.
// Call the function three times. The return values should be:
// 15
// 24
// 36
// It should look a little like this:

function createBase(x) {
  return function addNumber(y) {
    return x + y;
  };
}

const addSix = createBase(6);

// Put here your function calls...
addSix(9); //  => 15;
addSix(18); //  => 24;
addSix(30); // => 36
