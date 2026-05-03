const loginInput = document.querySelector(".login-form input");
const loginButton = document.querySelector(".login-form button");

function onLoginBtnClick() {
    const username = loginInput.value;
/*   if(username === ""){
        alert("이름을 입력하세요");
    } else if(username.length > 15) {    /// string 다음 lenght만 하면 되도록 js에서 사전 구현
        alert("너무 길어요")
    }*/
}



loginButton.addEventListener("click", onLoginBtnClick);
