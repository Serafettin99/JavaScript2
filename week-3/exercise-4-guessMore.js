'use strict';
// In this exercise you'll be presented with another code snippet. Guess the output and write out your reasoning in 50 words or less.

// Snippet
const x = '9';
let f1 = function(val) {
  val = val + 1;
  return val;
};
f1(x);
console.log(x);
// output is still 9, because it is passed by value which means as if it will make a copy inside the function.
//And even if the value is changed inside, the outside wouldn't get reflected.

const y = { x: 9 };
function f2(val) {
  val.x = val.x + 1;
  return val;
}
f2(y);
console.log(y);
// output => {x:10}.
// Because "x" is being passed by reference.
// In that code the value of "x" is being mutated  by using "val.x"
// If it is passed into a function by reference,
// and change the value inside the function,
// the change gets reflected to the variable outside.
