import { addBook } from './addbook.js';
import { removeBook } from './removebook.js';


const addBookButton = document.getElementById('addBookButton');
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const imageInput = document.getElementById('image');
const booksContainer = document.querySelector('.bottom-section');

let books = [];


addBookButton.addEventListener('click', () => {
    const title = titleInput.value.trim();
    const author = authorInput.value.trim();
    const image = imageInput.files[0];

   
    if (title && author && image) {
        addBook(title, author, image, books, booksContainer);
        titleInput.value = '';
        authorInput.value = '';
        imageInput.value = '';
    } else {
        alert('Please fill out all the fields before adding a book.');
    }
});


booksContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('remove')) {
        const bookElement = event.target.closest('.book-1');
        removeBook(bookElement, books);
    }
});


