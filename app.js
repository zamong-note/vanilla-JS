/* 
const loginForm = document.querySelector(".login-form"); /// 또는 getElementById("login-form")
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
*/

const loginInput = document.querySelector(".login-form input");
const loginButton = document.querySelector(".login-form button");

function onLoginBtnClick() {
    console.log("hello", loginInput.value);
}


loginButton.addEventListener("click", onLoginBtnClick)






