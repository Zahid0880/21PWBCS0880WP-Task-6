const bookList = []; // Array to store books

// Function to display the book list
function displayBookList() {
    const bookListElement = document.getElementById('book-list');
    bookListElement.innerHTML = '';

    bookList.forEach((book, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${index + 1}. ${book.title} by ${book.author} ISBN: ${book.isbn}`;
        bookListElement.appendChild(listItem);
    });
}

// Function to add a new book
function addBook() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;

    if (title && author && isbn) {
        const newBook = {
            title,
            author,
            isbn
        };

        // Check for duplicates
        const isDuplicate = bookList.some(book => book.title === newBook.title);

        if (!isDuplicate) {
            bookList.push(newBook);
            displayBookList();

            // Clear the input fields
            document.getElementById('title').value = '';
            document.getElementById('author').value = '';
            document.getElementById('isbn').value = '';
        } else {
            alert('Book with the same title already exists.');
        }
    }
}

// Function to search for books
function searchBooks() {
    const searchText = document.getElementById('search').value.toLowerCase();

    const searchResultsList = document.getElementById('search-results-list');
    searchResultsList.innerHTML = '';

    const searchResults = bookList.filter((book) =>
        book.title.toLowerCase().includes(searchText)
    );

    searchResults.forEach((book) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${book.title} by ${book.author} ISBN: ${book.isbn}`;
        searchResultsList.appendChild(listItem);
    });
}

// Add event listeners
document.getElementById('add-book-button').addEventListener('click', addBook);
document.getElementById('search-button').addEventListener('click', searchBooks);

// Display the initial book list
displayBookList();
