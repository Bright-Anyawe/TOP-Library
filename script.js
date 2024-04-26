let myLibrary = [];
const button = document.querySelector('#btn');
const form = document.querySelector('#form1');
const submit = document.querySelector('#submit');
const table = document.querySelector('table');
const headerRow = document.createElement('tr')
const headers = ['Title', 'Author', 'Book Page', 'Read', 'Page-Reach'];

headers.forEach(headerText => {
    let header = document.createElement('th');
    let textNode = document.createTextNode(headerText);
    header.appendChild(textNode);
    headerRow.appendChild(header);
})


function Book(title, author, page, read, pageNumber) {
    this.title = title;
    this.author = author;
    this.page = page;
    this.read = read;
    this.pageNumber = pageNumber;
}

form.addEventListener('submit', function (event) {
    event.preventDefault();
})

button.addEventListener('click', showform = () => {
    form.style.display = 'block'
});



function createInputElement() {

    const readInput = document.querySelector('#read');
    const container = document.querySelector('#container');

    readInput.addEventListener('input', inputListener = () => {
        const inputValue = readInput.value;

        if (inputValue === 'Yes' || inputValue === 'yes') {
            // Create the label element
            const label = document.createElement('label');
            
            label.textContent = 'Enter The Page Number Reach.'
            label.setAttribute('for', 'enter-page-number');

            // Create the input element
            const input = document.createElement('input');
            input.type = 'number';
            input.id = 'enter-page-number';

            // Append element to container
            container.appendChild(label);
            container.appendChild(input);

        }
        else {
            container.textContent = '';
        }

    })

    submit.addEventListener('click', () => {
        readInput.removeEventListener('input', inputListener);
    })

}
createInputElement();


const addLibraryBook = () => {

    const title = document.querySelector('#book-title').value;
    const author = document.querySelector('#Author').value;
    const page = document.querySelector('#book-page').value;
    const read = document.querySelector('#read').value;
    let pageNumber = '';

    if (read === 'Yes' || read === 'yes') {
        pageNumber = document.querySelector('#enter-page-number').value;
    }


    const userBooks = new Book(`${title}`, `${author}`, `${page}`, `${read}`, `${pageNumber}`);

    myLibrary.push(userBooks);
    document.querySelector('form').reset();
    displayBooks();

}

Book.prototype.toggleReadStatus = function () {
    this.read = !this.read;
};




const displayBooks = () => {


    clearBookDisplay();
    table.appendChild(headerRow);

    myLibrary.forEach((book, index) => {
        let row = document.createElement('tr');

        Object.values(book).forEach(text => {
            let cell = document.createElement('td');
            cell.textContent = text;
            row.appendChild(cell);

        });

        let removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.addEventListener('click', () => removeBook(index));

        let removeCell = document.createElement('td');
        removeCell.appendChild(removeButton);
        row.appendChild(removeCell);
        table.appendChild(row);

        const toggleButton = document.createElement('button');
        if (book.read) {
            toggleButton.textContent = 'Mark Unread';
          } else {
            toggleButton.textContent = 'Mark Read';
          }

        toggleButton.addEventListener('click', () => {
            book.toggleReadStatus();
            displayBooks(); // Update the book display after toggling read status
        });

        toggleButton.addEventListener('click', () => {
            book.toggleReadStatus();
            displayBooks(); // Update the book display after toggling read status
        });

        row.appendChild(toggleButton);
        table.appendChild(row);

    })

}

submit.addEventListener('click', addLibraryBook);

const clearBookDisplay = () => {
    const table = document.querySelector('#book-table');
    while (table.lastChild) {
        table.removeChild(table.lastChild);
    }
};

const removeBook = (bookIndex) => {
    myLibrary.splice(bookIndex, 1);
    displayBooks();
};





