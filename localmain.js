
const inpTitle = document.getElementById('title-input')
const inpAuthor = document.getElementById('author-input')
const inpPages = document.getElementById('pages-input')
const inpReadYN = document.getElementById('readYN-input')
const insertBtn = document.getElementById('form')
const outputUl = document.getElementById('output')

const myLibrary = JSON.parse(localStorage.getItem("Books"))|| [];


const addBookToLibrary = (title,author,pages,read) => {
    myLibrary.push({
        title,
        author,
        pages,
        read
    });
    localStorage.setItem("Books", JSON.stringify(myLibrary))
    return { title,author,pages,read }
}

// insertBtn.addEventListener('click', addBookToLibrary)

const outputAll = ({title, author, pages, read}) => {
    const outputTitle = document.createElement('li')
    outputTitle.innerText = "Title: "+ title
    const outputAuthor = document.createElement('li')
    outputAuthor.innerText = "Author: "+author
    const outputPages = document.createElement('li')
    outputPages.innerText = "Pages: "+pages
    const outputRead = document.createElement('li')
    outputRead.innerHTML = "Read: "+read+"<br><br>"

    outputUl.append(outputTitle, outputAuthor, outputPages, outputRead)        
}

myLibrary.forEach(outputAll)

insertBtn.onsubmit = (e) => {
    e.preventDefault();
    const newBook = addBookToLibrary(
        inpTitle.value,
        inpAuthor.value,
        inpPages.value,
        inpReadYN.value
    );

    outputAll(newBook)
        inpTitle.value = "";
        inpAuthor.value = "";
        inpPages.value = "";
        inpReadYN.value = "";
    };



