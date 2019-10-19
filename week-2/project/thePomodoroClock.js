'use strict';

const upArrowBtn = document.getElementById('up-arrow');
const downArrowBtn = document.getElementById('down-arrow');
let board = document.getElementById('board');
let timeBoard = document.getElementById('time-board');
const playBtn = document.getElementById('play');
const pauseBtn = document.getElementById('pause');

let timerController = null;
let minutes;

// This function the up-arrow work.
const countUp = function() {
  minutes = parseInt(board.textContent, 10);
  if (timerController === null) {
    board.textContent = minutes + 1;
    setInitialTime();
  }
};

// This function the up-arrow work.
function countDown() {
  if (timerController === null) {
    minutes = parseInt(board.textContent);
    if (minutes > 0) {
      board.textContent = minutes - 1;
    }
    setInitialTime();
  }
}

// This function is for setting the numbers to the clock-style and displaying on the 'timeBoard'
function setInitialTime() {
  minutes = parseInt(board.textContent, 10);
  timeBoard.textContent = `${minutes < 10 ? '0' + minutes : minutes}:00`;
}

// This function makes the clock work.
function updateTimer() {
  const time = timeBoard.textContent.split(':');
  let seconds = parseInt(time[0], 10) * 60 + parseInt(time[1], 10);
  --seconds;

  if (seconds === 0) {
    timeBoard.textContent = `Time's up!`;
    window.clearInterval(timerController);
    timerController = null;
    return;
  }

  const minute = Math.floor(seconds / 60);
  seconds = seconds % 60;
  timeBoard.textContent = `${minute < 10 ? '0' + minute : minute}:${
    seconds < 10 ? '0' + seconds : seconds
  }`;
}
//This function starts setInterval method when the 'playBtn' is clicked
function play() {
  if (timerController === null) {
    timerController = window.setInterval(() => {
      updateTimer();
    }, 10);
  }
}

//This function starts setInterval method when the 'pauseBtn' is clicked
function pause() {
  window.clearInterval(timerController);
  timerController = null;
}

upArrowBtn.addEventListener('click', countUp);
downArrowBtn.addEventListener('click', countDown);
playBtn.addEventListener('click', play);
pauseBtn.addEventListener('click', pause);
