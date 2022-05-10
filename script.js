const book1 = new Book ('La lista','Michael Conelly', 'Litle, Brown', 'Mistero', 15.00, 100, 422, 5, 2011);
const book2 = new Book ('Il cardellino', 'Donna Tartt', 'Rizzoli', 'Narrativa', 17.00, 300, 893, 5, 2017);
const book3 = new Book ('Purgatorio', 'Dante Alighieri', 'Giulio Einaudi', 'Narrativa', 13.00, 200, 300, 0,  1977)


const booksArray = [book1, book2, book3];

// console.log(book1.toString());
// console.log(book2.toString());


function displayBookTemplate(){
    const template =  `
    <div class="book-container">
        <div class="title"><h2>#TITLE</h2></div>
        <div class="author">#AUTHOR</div>
        <div class="editor">#EDITOR</div>
        <div class="genre">#GENERE</div>
        <div class="price">#PRICE</div>
        <div class="copies">#COPIES</div>
        <div class="discount">#DISCOUNT</div>
        <div class="yop">#YOP</div>
        <button class="button">VENDUTO</button>
    </div>  
    `

    const bookListContainer = document.getElementById('books-container')
    bookListContainer.innerHTML = '';

    for (let i = 0; i < booksArray.length; i++) {
        const book = booksArray[i];
        console.log(book.toString());

        const div = document.createElement('div');
        const bookTemplate = template.replace('#TITLE', book.title)
                                     .replace('#AUTHOR', book.author)
                                     .replace('#EDITOR', book.publisher)
                                     .replace('#GENERE', book.type)
                                     .replace('#PRICE', book.price)
                                     .replace('#COPIES', book.copies)
                                     .replace('#DISCOUNT', book.discount)
                                     .replace('#YOP', book.yop)
  
        div.innerHTML = bookTemplate;
        bookListContainer.appendChild(div);

      


    }





}
displayBookTemplate();