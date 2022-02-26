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

function insert() {
    libraryParser()
    const title = inpTitle.value
    const author = inpAuthor.value
    const pages = inpPages.value
    const read = inpReadYN.value
    myLibrary.push(new Book(title,author,pages,read))
    localStorage.setItem("Books",JSON.stringify(myLibrary))  
    location.reload()      
}

// Create output from parsed array, then creae a delete button of any given output