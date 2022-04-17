let myLibrary = [
    // {
    //     title: "Harry Potter",
    //     author: "J.K Rowling",
    //     pages: 111,
    //     read: "Yes"
    // },
    // {
    //     title: "Harry Potter",
    //     author: "J.K Rowling",
    //     pages: 111,
    //     read: "Yes"
    // }    
]
let inpTitle = document.getElementById('title-input')
let inpAuthor = document.getElementById('author-input')
let inpPages = document.getElementById('pages-input')
let inpReadYN = document.getElementById('readYN-input')
const insertBtn = document.getElementById('form')
let outputUl = document.getElementById('output')

function Book(title,author,pages,read) {
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read;
}


const addBookToLibrary = () => {
    let title = inpTitle.value;
    let author = inpAuthor.value;
    let pages = inpPages.value;
    let read = inpReadYN;
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

// insertBtn.addEventListener('click', addBookToLibrary)

const outputAll = () => {
    const outputTitle = document.createElement('li')
    outputTitle.innerText = "Title: "+ myLibrary.title
    const outputAuthor = document.createElement('li')
    outputAuthor.innerText = "Author: "+myLibrary.author
    const outputPages = document.createElement('li')
    outputPages.innerText = "Pages: "+myLibrary.pages
    const outputRead = document.createElement('li')
    outputRead.innerHTML = "Read: "+myLibrary.read+"<br><br>"

    outputUl.append(outputTitle, outputAuthor, outputPages, outputRead)        
}

myLibrary.forEach(outputAll)

insertBtn.onsubmit = (e) => {
    e.preventDefault();
    alert('click')
    // const newBook = addBookToLibrary(
    //     inpTitle.value,
    //     inpAuthor.value,
    //     inpPages.value,
    //     inpReadYN.value
    // );

    // outputAll(newBook)
    //     inpTitle.value = "";
    //     inpAuthor.value = "";
    //     inpPages.value = "";
    //     inpReadYN.value = "";
    };



