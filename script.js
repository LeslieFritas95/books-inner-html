const book1 = new Book ('La Lista','Michael Conelly', 'Litle, Brown', 'Mistero', 15.00, 8, 422, 5, 2011);
const book2 = new Book ('Il Cardellino', 'Donna Tartt', 'Rizzoli', 'Narrativa', 17.00, 4, 893, 5, 2017);
const book3 = new Book ('Purgatorio', 'Dante Alighieri', 'Giulio Einaudi', 'Narrativa', 13.00, 3, 300, 0,  1977)


const booksArray = [book1, book2, book3];
const booksNoDisp = [];

// console.log(book1.toString());
// console.log(book2.toString());


function displayBookTemplate(){
    const template =  `
    <div class="book-container">
        <div class="title"><h2>#TITLE</h2></div>
        <div class="author"><strong>Author:</strong> #AUTHOR</div>
        <div class="editor"><strong>Editor: </strong> #EDITOR</div>
        <div class="genre"><strong>Genere:</strong> #GENERE</div>
        <div class="price"><strong>Prezzo:</strong> #PRICE€</div>
        <div class="copies"><strong>Copies:</strong> #COPIES</div>
        <div class="discount"><strong>Sconto:</strong> #DISCOUNT%</div>
        <div class="yop"><strong>Anno:</strong> #YOP</div>
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

        const bookContainer= div.querySelector('.book-container')
        const  button = document.createElement('button');
        button.appendChild(document.createTextNode('COMPRA'))
        button.classList.add('button')        
        // const sellBook = () => {
        //     console.log('venduto')
        // }
        function sellBook(book){
            book.copies = book.copies - 1;
            console.log(book)

            if (book.copies === 0) {
                booksArray.splice(i ,1)
                booksNoDisp.push(book)
                displayBookTemplateNonDisp();
            }

            displayBookTemplate();
        }
        button.addEventListener('click', () => sellBook(book));
        bookContainer.appendChild(button);
    }
}



function displayBookTemplateNonDisp(){
    const template =  `
    <div class="book-container">
        <div class="title"><h2>#TITLE</h2></div>
        <div class="author"><strong>Author:</strong> #AUTHOR</div>
        <div class="editor"><strong>Editor: </strong> #EDITOR</div>
        <div class="genre"><strong>Genere:</strong> #GENERE</div>
        <div class="price"><strong>Prezzo:</strong> #PRICE€</div>
        <div class="copies"><strong>Copies:</strong> #COPIES</div>
        <div class="discount"><strong>Sconto:</strong> #DISCOUNT%</div>
        <div class="yop"><strong>Anno:</strong> #YOP</div>
    </div>  
    `

    const bookListContainer = document.getElementById('books-container-2')
    bookListContainer.innerHTML = '';

    for (let i = 0; i < booksNoDisp.length; i++) {
        const book = booksNoDisp[i];
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


