export function addBook(title, author, image, books, booksContainer) {
    const reader = new FileReader();
    reader.onload = function (e) {
        const newBook = {
            title: title,
            author: author,
            imageUrl: e.target.result
        };
        
        books.push(newBook);

        
        const bookElement = document.createElement('div');
        bookElement.classList.add('book-1');

        bookElement.innerHTML = `
            <div class="book-image" style="background-image: url(${newBook.imageUrl});"></div>
            <div class="image-details">
                <h2 class="book-title">${newBook.title}</h2>
                <p>by ${newBook.author}</p>
            </div>
            <button class="remove">Remove Book</button>
        `;

        booksContainer.appendChild(bookElement);
    };

    reader.readAsDataURL(image);
}






