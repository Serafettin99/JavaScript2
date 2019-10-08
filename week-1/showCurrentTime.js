'use strict';

let currentTime = setInterval(getTheTime, 1000);

function getTheTime() {
  let today = new Date();
  document.body.innerHTML = today.toLocaleTimeString();
}
