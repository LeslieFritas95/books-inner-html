class Book extends Publication {
    constructor (title, author, editor, genre, price, copies, pages, discount, yop){
        super(title, editor, genre, price, copies, discount, 10)
        this.author = author;
        this.pages = pages;
        this.yop = yop
    }
    toString(){
        
        const bookString = super.toString()+'\n'+
                           "Author: " + this.author + "\n" + 
                           "Pages: " + this.pages + "\n" +
                           "Year of publishing: " + this.yop;
                                
        return bookString;
    }
}