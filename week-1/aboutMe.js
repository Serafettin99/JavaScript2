'use strict';
let body = document.getElementsByTagName('body')[0];
body.style.fontFamily = 'Arial, sans-serif';
let nickName = document.getElementById('nickname');
nickName.innerText = 'Seref';
let favFood = document.getElementById('fav-food');
favFood.innerText = 'Manti';
let hometown = document.getElementById('hometown');
hometown.innerText = 'Zutphen';
let li = document.getElementsByTagName('li');

for (let i = 0; i < li.length; i++) {
  li[i].setAttribute('class', 'list-item');
}

let img = document.createElement('img');
img.setAttribute('src', './photo/aaa.jpg');
document.body.appendChild(img);
