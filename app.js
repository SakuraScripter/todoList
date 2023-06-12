let toDoButton = document.getElementById('addButton');
let addToDos = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

toDoButton.addEventListener('click', function(){

    let paragraph = document.createElement('p');
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
    inputField.value = '';

    paragraph.addEventListener('click', function(){
    toDoContainer.removeChild(paragraph);
    })
})