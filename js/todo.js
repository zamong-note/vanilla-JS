const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");  // document.querySelector("#todo-form input"); 과 동일한 코드이다. 
const toDoList = document.getElementById("todo-list");

function deleteTodo(event){
    // console.log(event.target.parentElement.innerText);   -> 어떤 list인지 텍스트 출력
    const li = event.target.parentElement;
    li.remove();
}

function paintToDo(newTodo){
    const li = document.createElement("li");   // li를 추가함. 괄호안은 html 태그이름이어야하고 변수명은 상관x
    const span = document.createElement("span");    // span을 추가함.
    const button = document.createElement("button");
    span.innerText = newTodo;
    button.innerText = "X";
    button.addEventListener("click", deleteTodo);
    li.appendChild(span);           // html에 실제로 span이 추가됨. append는 마지막에들어감
    li.appendChild(button);         // span이 생길 때 버튼도 같이 생기게 하고 싶다
    toDoList.appendChild(li);       // 실제로 html에 보이도록 해주는 코드
}

function handleToDoSubmit() {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";     // 엔터 칠때마다 창을 비우기
    paintToDo(newTodo);     // 함수 종료 전 paintToDo에 newTodo 값 집어넣고 호출
}


toDoForm.addEventListener("submit", handleToDoSubmit);



// 현재 코드에서는 새로고침하면 다 사라지고, 삭제도 불가하다