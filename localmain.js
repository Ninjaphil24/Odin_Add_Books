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

function insert() {
    const title = inpTitle.value
    const author = inpAuthor.value
    const pages = inpPages.value
    const read = inpReadYN.value
    const insertBook = JSON.stringify(new Book(title,author,pages,read))
    localStorage.setItem("Book",insertBook)
        
}