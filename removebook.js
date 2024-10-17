export function removeBook(bookElement, books) {
    
    bookElement.remove();

   
    const bookTitle = bookElement.querySelector('.book-title').textContent;
    books = books.filter(book => book.title !== bookTitle);
}



