// 'use strict';

const myHobbies = [
  'Meditation',
  'Reading',
  'Programming',
  'Hanging out with friends',
  'Going to the gym',
];
// Write a program that outputs each of these inside an HTML file
// Create an HTML and JavaScript file, link them together
// Use the map and/or forEach function to put each hobby into a list item
// Output the list items in an unordered list

const ul = document.createElement('ul');
document.body.appendChild(ul);
myHobbies.forEach(pushToHTML);

function pushToHTML(item) {
  const li = document.createElement('li');
  li.textContent = item;
  ul.appendChild(li);
}
