const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");  // document.querySelector("#todo-form input"); 과 동일한 코드이다. 
const toDoList = document.getElementById("todo-list");

function handleToDoSubmit() {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";     // 엔터 칠때마다 창을 비우기
}


toDoForm.addEventListener("submit", handleToDoSubmit);



