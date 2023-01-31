const input = document.getElementById("favchap");
const button = document.getElementById("add-button");
const list = document.getElementById("list");




button.addEventListener("click", () => {
    let chapter = input.value;
    let listElement = document.createElement('li');
    let deleteButton = document.createElement('button');
    listElement.textContent = chapter;
    deleteButton.textContent = 'X';

    listElement.appendChild(deleteButton);
    list.appendChild(listElement);

    
    deleteButton.addEventListener("click", () => {list.removeChild(listElement)});

    input.focus()

    input.textContent = '';


})






