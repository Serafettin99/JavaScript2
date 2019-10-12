'use strict';
const body = document.getElementsByTagName('body')[0];
body.style.fontFamily = 'Arial, sans-serif';
const nickName = document.getElementById('nickname');
nickName.innerText = 'Seref';
const favFood = document.getElementById('fav-food');
favFood.innerText = 'Manti';
const hometown = document.getElementById('hometown');
hometown.innerText = 'Zutphen';
const li = document.getElementsByTagName('li');

for (let i = 0; i < li.length; i++) {
  li[i].setAttribute('class', 'list-item');
}

const img = document.createElement('img');
img.setAttribute('src', './photo/aaa.jpg');
document.body.appendChild(img);
