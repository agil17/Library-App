myLibrary = []

function Book(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;

    // this.toggleReadStatus = function() {
    //     this.readStatus = !this.readStatus;
    // }
}

Book.prototype.toggleReadStatus = function() {
    this.readStatus = !this.readStatus;
}

//show form
let newBookBtn = document.querySelector('.new-book-btn');
newBookBtn.addEventListener('click', function() {
    let formContainer = document.querySelector('.form-container');
    formContainer.style.display === 'block' ? formContainer.style.display = 'none' : formContainer.style.display = 'block';
})

//add book
function addBookToLibrary() {
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let pages = document.querySelector('#pages').value;
    let readStatus = document.querySelector('#hasRead').checked; 

    let newBook = new Book(title, author, pages, readStatus);

    myLibrary.push(newBook);

    showBooks();

}

//add event listener to form 
let newBookForm = document.querySelector('.new-book-form').addEventListener('submit', function(event) {
    event.preventDefault();
    addBookToLibrary();
})

//show books
function showBooks() {
    let libraryEl = document.querySelector('.library-container');
    libraryEl.innerHTML="";



    for(let i = 0; i < myLibrary.length; i++) {
        let bookCard = document.createElement('div');
        bookCard.setAttribute('class', 'book-card');
        
        let title = document.createElement('h3');
        title.textContent = `${myLibrary[i].title}`;
        title.setAttribute('class', 'book-title');

        let author = document.createElement('h3');
        author.textContent = `by ${myLibrary[i].author}`;
        author.setAttribute('class', 'book-author');


        let pages = document.createElement('p');
        pages.textContent = `Pages: ${myLibrary[i].pages}`;
        pages.setAttribute('class', 'book-pages');

        let readStatus = document.createElement('p');
        readStatus.textContent = `${myLibrary[i].readStatus}`;
        readStatus.setAttribute('class', 'book-read');

        let buttonsContainer = document.createElement('div');
        buttonsContainer.setAttribute('class', 'buttons-container');

        let toggleReadButton = document.createElement('button');
        toggleReadButton.textContent = 'Has Read';
        toggleReadButton.setAttribute('class', 'toggle-read-btn');
        toggleReadButton.onclick = function() {
            toggleReadStatus(`${i}`);
        }

        let removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.setAttribute('class', 'remove-btn');
        removeButton.onclick = function() {
            removeBook(`${i}`);
        }

        buttonsContainer.appendChild(toggleReadButton);
        buttonsContainer.appendChild(removeButton);

        bookCard.appendChild(title);
        bookCard.appendChild(author);
        bookCard.appendChild(pages);
        bookCard.appendChild(readStatus);
        bookCard.appendChild(buttonsContainer);

        libraryEl.appendChild(bookCard);
        
        let booksAmount = document.querySelector('.books-amount');
        booksAmount.textContent = "";
        booksAmount.textContent = `${myLibrary.length}`;
    }
}

//remove books
function removeBook(index) {
    myLibrary.splice(index, 1);
    showBooks();
}

//toggle read status
function toggleReadStatus(index) {
    myLibrary[index].toggleReadStatus();
    showBooks();
}

function showBooksAmount() {
    let newBookBtnContainer = document.querySelector('.new-book-btn-container');
    let showBooksAmountContainer = document.createElement('div');

    let booksContainerText = document.createElement('h3');
    booksContainerText = "";
    booksContainerText.textContent = `Number of Books: ${myLibrary.length}`;

    showBooksAmountContainer.appendChild(booksContainerText);
    newBookBtnContainer.appendChild(showBooksAmountContainer);
}
