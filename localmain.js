let myLibrary = []
const inpTitle = document.getElementById('title-input')
const inpAuthor = document.getElementById('author-input')
const inpPages = document.getElementById('pages-input')
const inpReadYN = document.getElementById('readYN-input')
const insertBtn = document.getElementById('insert')

function Book(title,author,pages,read) {
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read;
}

insertBtn.addEventListener('click', insert)

let libraryParser = () => {
    if(localStorage.getItem(myLibrary))return JSON.parse(localStorage.getItem(myLibrary))
    else return null
}

function insert() {
    libraryParser()
    const title = inpTitle.value
    const author = inpAuthor.value
    const pages = inpPages.value
    const read = inpReadYN.value
    myLibrary.push(new Book(title,author,pages,read))
    localStorage.setItem("Book",JSON.stringify(myLibrary))        
}
// function insert() {
//     libraryParser()
//     const title = "Potter"
//     const author = "Rowling"
//     const pages = 255
//     const read = "Yes"
    
// }




// You must create an array.  Use Stringify to save the array in local storage.  Use parse to to the array back to an array to add stuff.  Use Stringify to resave the array in local storate.