let myLibrary = [];

function Book(title,author,pages,read) {
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read;
    this.info = function() {
        return title+" by "+author+" is "+pages+" pages and is "+read;
    }
}

// const title = "Potter"
// const author = "Rowling"
// const pages = 399
// const read = "Yes"
// const title1 = "Moby Dick"
// const author1 = "Melville"
// const pages1 = 250
// const read1 = "No"




// console.log(addBookToLibrary(title,author,pages,read))
// console.log(addBookToLibrary(title1,author1,pages1,read1))
// console.log(myLibrary)

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
    const entry = new Book(title,author,pages,readYN)
    return entry
}

function addBookToLibrary() {
    // do stuff here
    myLibrary.push(ready())
    return myLibrary
}

function printBook() {
    addBookToLibrary()
    const card = document.getElementById('card')
    // for(let i=0;i<myLibrary.length;i++) 
    for (let i in myLibrary)
    {
        const div = document.createElement('div')
        div.textContent = "Title: "+ myLibrary[i].title 
        const div2 = document.createElement('div')
        div2.textContent = "Author: "+ myLibrary[i].author 
        const div3 = document.createElement('div')
        div3.textContent = "Pages: "+ myLibrary[i].pages
        const div4 = document.createElement('div')
        div4.textContent = "Have you read this book: "+ myLibrary[i].read
        const br = document.createElement('br')
        
        myLibrary[i].author
        card.appendChild(div)    
        card.appendChild(div2)    
        card.appendChild(div3)    
        card.appendChild(div4)    
        card.appendChild(br)    
    }
}

printBook()


// const output = document.getElementById('output');
// const borderDiv = document.createElement('div');
// const elemH1 = document.createElement('h1');
// const me2p = document.createElement('p');
// output.appendChild(borderDiv)
// borderDiv.setAttribute('style','border: 1px solid black; background: pink;')

// elemH1.textContent = "I'm in a div";
// me2p.textContent = "ME TOO!";

// borderDiv.appendChild(elemH1);
// borderDiv.appendChild(me2p);


            
            // <div class="entry" id="author"></div>
            // <div class="entry" id="pageNumber"></div>
            // <div class="entry" id="read"></div>