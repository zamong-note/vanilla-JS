const h1 = document.querySelector("div.title:first-child h1");

function handleTitleClick() {
	console.log("title was clicked!");
    h1.style.color = "blue";
}

function handleMouseEnter() {
    h1.innerText = "Mouse is here!";
}

function handleMouseLeave() {
    h1.innerText = "Mouse is gone!";
}

function handleWindowResize() {
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
    alert("copier!");
}

function handleWindowOffline() {
    alert("No wifi");
}

function handleWindowOnline() {
    alert("Good wifi");
}

h1.addEventListener("click", handleTitleClick);  /// title.onclick = handleTitleClick; 이렇게 쓸 수도 있다
h1.addEventListener("mouseenter", handleMouseEnter);   /// 마우스가 올라갔을 때
h1.addEventListener("mouseleave", handleMouseLeave);   /// 마우스가 떠났을 때


window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);   /// wifi 꺼졌을때
window.addEventListener("online", handleWindowOnline);      /// wifi 켜졌을때