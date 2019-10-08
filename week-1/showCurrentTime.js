'use strict';

let currentTime = setInterval(getTheTime, 1000);

function getTheTime() {
  let today = new Date();
  // document.body.textContent =
  //   today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
  //     OR
  document.body.innerHTML = today.toLocaleTimeString();
}
