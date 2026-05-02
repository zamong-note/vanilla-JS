const title = document.querySelector("div.title:first-child h1");

function handleTitleClick() {
	console.log("title was clicked!");
    title.style.color = "blue";
}

title.addEventListener("click", handleTitleClick);  /// 클릭하는걸 리스닝하고 있음. 발생하면 function이 동작하게 한다. 