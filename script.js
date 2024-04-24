let myLibrary = [];
const button = document.querySelector('#btn');
const form = document.querySelector('#form1');
const submit = document.querySelector('#submit');
const table = document.querySelector('table');
const headerRow = document.createElement('tr')
const headers = ['Title', 'Author', 'Page', 'Read'];


function Book(title, author, page, read) {
    this.title = title;
    this.author = author;
    this.page = page;
    this.read = read;
}

form.addEventListener('submit', function (event) {
    event.preventDefault();
})

button.addEventListener('click', showform = () => {
    form.style.display = 'block'
});

headers.forEach(headerText => {
    let header = document.createElement('th');
    let textNode = document.createTextNode(headerText);
    header.appendChild(textNode);
headerRow.appendChild(header);
})


const addLibraryBook = () => {

    const title = document.querySelector('#book-title').value;
    const author = document.querySelector('#Author').value;
    const page = document.querySelector('#book-page').value;
    const pageRead = document.querySelector('#read').value;
    
    const userBooks = new Book(`${title}`, `${author}`, `${page}`, `${pageRead}`);

    myLibrary.push(userBooks);
    document.querySelector('form').reset();
    displayBooks();

}

const clearBookDisplay = () => {
    const table = document.querySelector('#book-table');
    while (table.lastChild) {
        table.removeChild(table.lastChild);
    }
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
        removeButton.addEventListener('click', () => removeButton(index));

        let removeCell = document.createElement('td');
        removeCell.appendChild(removeButton);
        row.appendChild(removeCell);
        table.appendChild(row);

    })
    
}

submit.addEventListener('click', addLibraryBook);









