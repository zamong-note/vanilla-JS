const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");  
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"

let toDos = [];  


function saveToDos() {
    localStorage.setItem("TODOS_KEY", JSON.stringify(toDos));   
}


function deleteTodo(event){
    const li = event.target.parentElement;
    li.remove();
}

function paintToDo(newTodo){
    const li = document.createElement("li");   
    const span = document.createElement("span");   
    const button = document.createElement("button");
    span.innerText = newTodo;
    button.innerText = "X";
    button.addEventListener("click", deleteTodo);
    li.appendChild(span);           
    li.appendChild(button);         
    toDoList.appendChild(li);      
}

function handleToDoSubmit() {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";    
    toDos.push(newTodo);    
    paintToDo(newTodo);     
    saveToDos();        
}


toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);


if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);  // 
}





/* => 배우기 전 작성한 코드 (arrow function이라고 함)

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

function sayHello(item) {
    console.log("this is the turn of ", item);
}


if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    parsedToDos.forEach(sayHello);
}  */