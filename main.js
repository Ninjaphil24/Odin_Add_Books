function Book(title,author,pages,read) {
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read;
    this.info = function() {
        return title+" by "+author+" is "+pages+" pages and is "+read;
    }
}

const hobbit = new Book('The Hobbit','Tolkien','295','not read')
console.log(hobbit.info())


let myLibrary = [];

function Book() {
  // the constructor...
}

function addBookToLibrary() {
  // do stuff here
}