'use strict';
// Your mom bought you a basket of fruit, because you're doing so well in HackYourFuture. How sweet of her!

const fruitBasket = ['Apple', 'Lemon', 'Grapefruit', 'Lemon', 'Banana', 'Watermelon', 'Lemon'];
// However, she forgot that you are allergic to lemons! Let's quickly dispose of them before you get an attack.

// Write a function
// Use the filter array function to take out the lemons
// Output a string that says: "My mom bought me a fruit basket, containing [array of fruits] !"

function filterLemonFromTheBasket(fruits) {
  return fruits.filter(fruit => fruit !== 'Lemon').join(', ');
}

const filteredBasket = `My mom bought me a fruit basket, containing ${filterLemonFromTheBasket(
  fruitBasket,
)}!`;

console.log(filteredBasket);
