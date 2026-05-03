const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");  
const toDoList = document.getElementById("todo-list");

const toDos = [];   // 배열을 하나 만들어주기. newTodo가 만들어질때마다 array에 push할것


function saveToDos() {
    localStorage.setItem("todos", JSON.stringify(toDos));   // 배열처럼 보이게 출력할 수 있다
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
    toDos.push(newTodo);    // newTodo가 만들어질때마다 array에 push하기
    paintToDo(newTodo);     
    saveToDos();        // 저장하는 함수 호출하기
}


toDoForm.addEventListener("submit", handleToDoSubmit);



// 아직 새로고침하면 다 사라진다