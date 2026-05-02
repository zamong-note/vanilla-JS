const h1 = document.querySelector("div.title:first-child h1");

function handleTitleClick() {
    h1.classList.toggle("clicked");
}


h1.addEventListener("click", handleTitleClick);  



/* line 4 한 줄은 아래 코드와 같다

function handleTitleClick() {
    const clickedClass = "clicked"
    if (h1.classList.contains(clickedClass)) {  /// html 클래스에 포함되어있는지 확인
        h1.classList.remove(clickedClass);
    } else {
        h1.classList.add(clickedClass);
    } 
}
 */
