'use strict';

const favouriteQuotes = [
  {
    quote: 'I think being in love with life is a key to eternal youth.',
    owner: 'Doug Hutchison',
  },
  {
    quote:
      'You’re only here for a short visit. Don’t hurry, don’t worry. And be sure to smell the flowers along the way.',
    owner: 'Walter Hagen',
  },
  {
    quote:
      'A man who dares to waste one hour of time has not discovered the value of life.',
    owner: 'Charles Darwin',
  },
  {
    quote:
      'If life were predictable it would cease to be life, and be without flavor.',
    owner: 'Eleanor Roosevelt',
  },
  {
    quote:
      'All life is an experiment. The more experiments you make the better.',
    owner: 'Ralph Waldo Emerson',
  },
  {
    quote:
      'All of life is peaks and valleys. Don’t let the peaks get too high and the valleys too low.',
    owner: 'John Wooden',
  },
];

const button = document.getElementById('new-quote');
const quoteEl = document.getElementById('quote-area');
const ownerEL = document.getElementById('quote-owner');

function getRandomQuote() {
  let randomNumber = Math.floor(Math.random() * favouriteQuotes.length);
  let randomElement = favouriteQuotes[randomNumber];
  quoteEl.innerHTML = randomElement.quote;
  ownerEL.innerHTML = randomElement.owner;
}

button.addEventListener('click', getRandomQuote);
