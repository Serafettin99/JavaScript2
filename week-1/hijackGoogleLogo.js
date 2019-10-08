'use strict';
function hijackGoogleLogo() {
  let img = document.getElementById('hplogo');
  img.src = 'https://www.hackyourfuture.dk/static/logo-dark.svg';
  img.srcset = 'https://www.hackyourfuture.dk/static/logo-dark.svg';
}

hijackGoogleLogo();
