'use strict';
// 1st step : Assigning html elements to the variables
const billAmount = document.getElementById('service');
const serviceQuality = document.getElementById('serv-point');
const numberOfPeople = document.getElementById('sharing');
const calculateBtn = document.getElementById('calc-btn');
const displayAmount = document.getElementById('tip');
const displayEach = document.getElementById('each');

// 2nd step: Checking the entries if they're valid
function checkEntries() {
  if (
    Number(billAmount.value) === 0 ||
    Number(serviceQuality.value) === 0 ||
    Number(numberOfPeople.value) === 0
  ) {
    alert('You need to fill in all the fields');
  } else if (isNaN(Number(billAmount.value)) || isNaN(Number(numberOfPeople.value))) {
    alert('Please enter numbers only');
  }
}

// 3rd step: Calculating the tip amount from the entered data
function calculateEntries() {
  let total =
    (Number(billAmount.value) * Number(serviceQuality.value)) / Number(numberOfPeople.value);
  total = total.toFixed(2);
  displayAmount.textContent = total;
}

// 4rd step: Forming the main function that is going to be added to eventListener
function calculateTheTip() {
  checkEntries();
  calculateEntries();
  if (Number(numberOfPeople.value) === 1) {
    displayEach.style.display = 'none';
  } else {
    displayEach.style.display = 'block';
  }
}

calculateBtn.addEventListener('click', calculateTheTip);
