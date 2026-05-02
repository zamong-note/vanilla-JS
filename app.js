const h1 = document.querySelector("div.title:first-child h1");

function handleTitleClick() {
    const clickedClass = "clicked"
    if (h1.className === clickedClass) {  /// className은 getter이자 setter이다
        h1.className = "";
    } else {
        h1.className = clickedClass;
    } 
}


h1.addEventListener("click", handleTitleClick);  