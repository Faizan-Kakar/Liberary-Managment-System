console.log('hi how are you feeling well fine');

// Constructor
function Book(name,author,type)
{
    this.name = name;
    this.author = author;
    this.type = type;
}

// Display the constructor/
function Display()
{
}

// Add methods to display prototype

// This will add the book, author and type in table as book button is pressed
Display.prototype.add = function(book)
{   
    let tableBody = document.getElementById('tableBody');
    let uiString = `<tr>
              
    <td>${book.name}</td>
    <td>${book.author}</td>
    <td>${book.type}</td>
  </tr>`
  tableBody.innerHTML += uiString;
}

// clear the Form when add Book button is pressed
Display.prototype.clear = function()
{
    let form = document.getElementById('form');
    form.reset();
}

// This is for the validation of the form
Display.prototype.validate = function(book)
{
    if(book.name.length<2 || book.author.length<2)
    {
        return false;
    }
    else{
        return true;
    }
}
// This is for the showing the popUps
Display.prototype.show = function(msg)
{
    let message = document.getElementById('message');
    if(msg == 'success')
    {
    let messageDisplay = `<div class="alert alert-success alert-dismissible fade show" role="alert">
    <strong>Succesfully Added!</strong> The book is added. </div>`
    message.innerHTML=messageDisplay;
    }
    else
    {
    let messageDisplay = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
    <strong>Error!</strong> You should write the name and author in correct formate.   </div>`
    message.innerHTML=messageDisplay;
}

    setTimeout(function () {
        message.innerHTML = ''
    }, 2000);
}

// Add Event listener of Form Submit
let form = document.getElementById('form');
form.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
    e.preventDefault();

    let name =document.getElementById('name').value;
    let author =document.getElementById('author').value;
    let type;

    let fiction = document.getElementById('fiction')
    let programming = document.getElementById('programming')
    let coking = document.getElementById('coking')
    if(fiction.checked){
        type = fiction.value;
    }
    else if(programming.checked){
        type =  programming.value;
    }
    else if(coking.checked){
        type = coking.value;
    }

    let book = new Book(name,author, type);

    let display  = new Display();

    if(   display.validate(book))
    {
        display.add(book);
        display.clear();
        display.show('success');

    }
    else{
        
        display.show('danger');
    }
}