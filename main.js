if (document.readyState == 'loading') {
	document.addEventListener('DOMContentLoaded', ready)
} else {
	ready()
}

function ready() {
	var title = new URL(window.location).searchParams.get('title')
	document.getElementById('title-input').value = title
	var author = new URL(window.location).searchParams.get('author')
	document.getElementById('author-input').value = author
	var pages = new URL(window.location).searchParams.get('pages')
	document.getElementById('pages-input').value = pages
	var readYN = new URL(window.location).searchParams.get('readYN')
	document.getElementById('readYN-input').value = readYN
}
// document.getElementById('query-output').innerHTML = query


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