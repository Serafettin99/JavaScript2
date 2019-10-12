'use strict';
const books = [
  {
    title: 'The Design of Everyday Things',
    author: 'Don Norman',
    alreadyRead: false,
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true,
  },
  {
    title: 'The Metamorphosis',
    author: 'Franz Kafka',
    alreadyRead: true,
  },
];

const images = [
  'https://s.s-bol.com/imgbase0/imagebase3/large/FC/9/1/7/6/9200000015006719.jpg',
  'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1295465264l/8884400.jpg',
  'https://images-na.ssl-images-amazon.com/images/I/51SadPtdWPL.jpg',
];

const alt = 'book image';

const ulElement = document.createElement('ul');
document.body.appendChild(ulElement);

for (let i = 0; i < books.length; i++) {
  const pElement = document.createElement('p');
  let details = document.createTextNode(`${books[i].title} by ${books[i].author}`);
  document.body.appendChild(pElement);
  pElement.appendChild(details);
  //                 or
  //pElement.innerText = `${books[i].title} by ${books[i].author}`;
  // document.body.appendChild(pElement);
  //In order to get the same result; we can use `innerHTML` and `textContent` instead of `innerText` as well.
  const liElement = document.createElement('li');
  liElement.appendChild(pElement);
  ulElement.appendChild(liElement);

  const imgElement = document.createElement('img');
  liElement.appendChild(imgElement);
  imgElement.setAttribute('src', images[i]);
  imgElement.style.height = '150px';
  imgElement.setAttribute('alt', alt);

  if (books[i].alreadyRead) {
    pElement.style.color = 'green';
  } else {
    pElement.style.color = 'red';
  }
}
