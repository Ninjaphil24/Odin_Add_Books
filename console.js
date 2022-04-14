let myLibrary = []
const Books = localStorage.key(0)

function Book(title,author,pages,read) {
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read;
}


let libraryParser = () => {
    let parsed = JSON.parse(localStorage.getItem(Books))
    if(localStorage.getItem(Books))return myLibrary.push(parsed)
    else return null
}

libraryParser()
function insert() {
    myLibrary.push(new Book("Test1","Test1",234,"Yes"))
    localStorage.setItem("Books",JSON.stringify(myLibrary))  
    location.reload()      
}

insert()

let Array = []

let Object1 = {
    title: "test1",
    author: "test1"
}

let Object2 = {
    title: "test2",
    author: "test2"
}

Array.push(Object1)


let myLibrary = []
undefined
function Book(title,author,pages,read) {
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read;
}
undefined
myLibrary.push(new Book("Test1","Test1",234,"Yes"))
1
myLibrary
// [Book]0: Book {title: 'Test1', author: 'Test1', pages: 234, read: 'Yes'}length: 1[[Prototype]]: Array(0)
myLibrary.push(new Book("Test2","Test2",23,"Yes"))
2
myLibrary
// (2) [Book, Book]0: Book {title: 'Test1', author: 'Test1', pages: 234, read: 'Yes'}1: Book {title: 'Test2', author: 'Test2', pages: 23, read: 'Yes'}length: 2[[Prototype]]: Array(0)
JSON.stringify(myLibrary)
'[{"title":"Test1","author":"Test1","pages":234,"read":"Yes"},{"title":"Test2","author":"Test2","pages":23,"read":"Yes"}]'
JSON.parse(myLibrary)
// VM175:1 Uncaught SyntaxError: Unexpected token o in JSON at position 1
    at JSON.parse (<anonymous>)
    at <anonymous>:1:6
{/* (anonymous) @ VM174:1 */}
localStorage.setItem(JSON.parse(myLibrary))
{/* VM290:1 Uncaught SyntaxError: Unexpected token o in JSON at position 1 */}
    at JSON.parse (<anonymous>)
    at <anonymous>:1:27
(anonymous) @ VM289:1
myLibrary
(2) [Book, Book]
localStorage.setItem(myLibrary)
VM349:1 Uncaught TypeError: Failed to execute 'setItem' on 'Storage': 2 arguments required, but only 1 present.
    at <anonymous>:1:14
(anonymous) @ VM349:1
localStorage.setItem("Books",myLibrary)
undefined
localStorage
Storage {Books: '[object Object],[object Object]', length: 1}
localStorage.getItem(Books)
VM476:1 Uncaught ReferenceError: Books is not defined
    at <anonymous>:1:22
(anonymous) @ VM476:1
localStorage.getItem("Books")
'[object Object],[object Object]'
JSON.parse("Books")
VM562:1 Uncaught SyntaxError: Unexpected token B in JSON at position 0
    at JSON.parse (<anonymous>)
    at <anonymous>:1:6
(anonymous) @ VM561:1
JSON.parse(Books)
VM582:1 Uncaught ReferenceError: Books is not defined
    at <anonymous>:1:12
(anonymous) @ VM582:1