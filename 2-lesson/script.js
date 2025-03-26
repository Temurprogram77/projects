let dataBase = document.querySelector('.data-base');
let editBtn = document.querySelector('.edit');
let deleteBtn = document.querySelector('.delete');
let textList = document.querySelector('.textList');

let taskInput = document.querySelector('#taskInput');
let addTaskBtn = document.querySelector('#addTaskBtn');

let array = [];


addTaskBtn.addEventListener('click', activeFunc)

function activeFunc(){
    if (!taskInput.value) {
        console.log("No data!");
        console.log(array);
    }
    else {
        console.log("Added data!");
        let inpValue = taskInput.value;
        array.push(inpValue);
        console.log(array);
        localStorage.setItem('nameArr', array);
        let storage = localStorage.getItem('nameArr')
        let json = JSON.stringify(storage);
        console.log(json,  "- Local Storage data.");
        
    }
}
