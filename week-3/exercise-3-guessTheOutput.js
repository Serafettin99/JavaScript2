'use strict';
// In this exercise you'll be presented with a code snippet. Your task is to guess the output and write out your reasoning in 50 words or less.

// Snippet
let a = 10;
const x = (function() {
  a = 12;
  return function() {
    alert(a);
  };
})();

x();

// x is expressed as an immediately invoked function.
// That means the function runs as soon as it is defined.
// In that case, the function returns another function.
// Therefore, when the function is invoked, we see the alert window by the value '12'
