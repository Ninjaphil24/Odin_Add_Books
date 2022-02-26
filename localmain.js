let myLibrary = []
const inpTitle = document.getElementById('title-input')
const inpAuthor = document.getElementById('author-input')
const inpPages = document.getElementById('pages-input')
const inpReadYN = document.getElementById('readYN-input')
const insertBtn = document.getElementById('insert')
const Books = localStorage.key(0)

function Book(title,author,pages,read) {
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read;
}

insertBtn.addEventListener('click', insert)

let libraryParser = () => {
    let parsed = JSON.parse(localStorage.getItem(Books))
    if(localStorage.getItem(Books))return myLibrary.push(parsed)
    else return null
}

libraryParser()
function insert() {
    const title = inpTitle.value
    const author = inpAuthor.value
    const pages = inpPages.value
    const read = inpReadYN.value
    myLibrary.push(new Book(title,author,pages,read))
    localStorage.setItem("Books",JSON.stringify(myLibrary))  
    location.reload()      
}

function printBook() {
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