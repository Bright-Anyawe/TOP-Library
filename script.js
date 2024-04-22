let myLibrary = [];

Object.setPrototypeOf(displayBooks.prototype, addLibraryBook.prototype);

function Book(title, author, page, read) {
    this.title = title;
    this.author = author;
    this.page = page;
    this.read = read;
    // this.reportInfo = function () {
    //     return `The ${this.title} by ${this.author}, ${this.page} pages, not read yet and ${this.read} pages read.`
    // }
}

function addLibraryBook() {

    const book1 = new Book(' Power Of Your Subconcious Mind', 'Joseph Murphy', '700', "20");
    const book2 = new Book(' Power Of Self Displine', 'Brain Tracy', '1000', "30");

    // const userBook = new Book(`${prompt('Write the title of the book')}`,
    //     `${prompt("Write the author's name")}`, `${prompt('How many pages is left to cover')}`,
    //     `${prompt("How many pages have you read?")}`);
    // myLibrary.push(userBook);
    myLibrary.push(book1, book2);
    // myLibrary.push(book2);
    //   console.table(userBook);
    //   console.log(userBook.reportInfo());   
    console.table(myLibrary);
}
addLibraryBook();

function displayBooks() {
    const table = document.querySelector('table');
    const headerRow = document.createElement('tr')
    const headers = ['Title', 'Author', 'Page', 'Read'];

    headers.forEach(headerText => {
        let header = document.createElement('th');
        let textNode = document.createTextNode(headerText);
        header.appendChild(textNode)
        headerRow.appendChild(header)
    })

    table.appendChild(headerRow)



    myLibrary.forEach((book) => {
        let row = document.createElement('tr');

        Object.values(book).forEach(text => {
            let cell = document.createElement('td');
            cell.textContent = text
            row.appendChild(cell);
        });
        table.appendChild(row)


        // alert(JSON.stringify(book));
        // display.textContent += JSON.stringify(book)

    })

}
displayBooks();

// const button = document.querySelector('#btn');

// button.addEventListener('click', showform = () => {
//     const form = document.createElement('#form1');
//     form.textContent = "#form1"



// })


