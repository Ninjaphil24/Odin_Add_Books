let myLibrary = []
let inpTitle = document.getElementById('title-input')
let inpAuthor = document.getElementById('author-input')
let inpPages = document.getElementById('pages-input')
let inpReadYN = document.getElementById('readYN-input')
let insertBtn = document.getElementById('insert')
let Books = localStorage.key(0)

function Book(title,author,pages,read) {
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read;
}

insertBtn.addEventListener('click', insert)

let libraryParser = () => {
    // let parsed = JSON.parse(localStorage.getItem(Books))
    if(localStorage.getItem(Books))myLibrary.push(localStorage.getItem(Books))
    else return null
}

libraryParser()
function insert() {
    let title = inpTitle.value
    let author = inpAuthor.value
    let pages = inpPages.value
    let read = inpReadYN.value
    let newBook = new Book(title,author,pages,read)
    myLibrary.push(newBook)
    storeLocally()
    location.reload()      
}

function storeLocally() {
    localStorage.setItem("Books", JSON.stringify(myLibrary))  
}

function printBook() {
    let card = document.getElementById('card')
    // for(let i=0;i<myLibrary.length;i++) 
    for (let i in myLibrary)
    {
        let div = document.createElement('div')
        div.textContent = "Title: "+ myLibrary[i].title 
        let div2 = document.createElement('div')
        div2.textContent = "Author: "+ myLibrary[i].author 
        let div3 = document.createElement('div')
        div3.textContent = "Pages: "+ myLibrary[i].pages
        let div4 = document.createElement('div')
        div4.textContent = "Have you read this book: "+ myLibrary[i].read
        let br = document.createElement('br')
        
        myLibrary[i].author
        card.appendChild(div)    
        card.appendChild(div2)    
        card.appendChild(div3)    
        card.appendChild(div4)    
        card.appendChild(br)    
    }
}

printBook()