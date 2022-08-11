/* eslint-disable max-classes-per-file */

import Collection from './modules/collection.js';
import { DateTime } from './modules/luxon.js';

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

const inputTitle = document.getElementById('title');
const inputAuthor = document.getElementById('author');
const submitBtn = document.querySelector('.add-btn');

const coll = new Collection();
if (localStorage.getItem('bookCollection')) {
  const localBooks = JSON.parse(localStorage.getItem('bookCollection'));
  localBooks.bookColl.forEach((element) => {
    coll.add(new Book(element.title, element.author));
  });
}

submitBtn.addEventListener('click', () => {
  coll.add(new Book(inputTitle.value, inputAuthor.value));
});

const navAdd = document.querySelector('#add-new');
const navList = document.querySelector('#list');
const navContact = document.querySelector('#contact');
const booksWindow = document.querySelector('.books-section');
const addWindow = document.querySelector('.add-books');
const contactWindow = document.querySelector('.contact-section');

navAdd.addEventListener('click', (evt) => {
  evt.preventDefault();
  addWindow.classList.remove('toggle');
  booksWindow.classList.add('toggle');
  contactWindow.classList.add('toggle');
  document.getElementById('cont-nav').style.color = 'black';
  document.getElementById('list-nav').style.color = 'black';
  document.getElementById('add-nav').style.color = 'blue';
});

navList.addEventListener('click', (evt) => {
  evt.preventDefault();
  booksWindow.classList.remove('toggle');
  addWindow.classList.add('toggle');
  contactWindow.classList.add('toggle');
  document.getElementById('cont-nav').style.color = 'black';
  document.getElementById('list-nav').style.color = 'blue';
  document.getElementById('add-nav').style.color = 'black';
});

navContact.addEventListener('click', (evt) => {
  evt.preventDefault();
  contactWindow.classList.remove('toggle');
  booksWindow.classList.add('toggle');
  addWindow.classList.add('toggle');
  document.getElementById('cont-nav').style.color = 'blue';
  document.getElementById('list-nav').style.color = 'black';
  document.getElementById('add-nav').style.color = 'black';
});

const dateWidget = document.querySelector('.date');
const dateNow = DateTime.now();

dateWidget.innerHTML = `${dateNow.monthLong}, ${dateNow.day}, ${dateNow.weekYear}, ${dateNow.hour}:${dateNow.minute}:${dateNow.second}`;