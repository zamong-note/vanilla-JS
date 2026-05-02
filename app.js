const title = document.querySelector("div.title:first-child h1");

function handleTitleClick() {
	console.log("title was clicked!");
    title.style.color = "blue";
}

function handleMouseEnter() {
    title.innerText = "Mouse is here!";
}

function handleMouseLeave() {
    title.innerText = "Mouse is gone!";
}

title.addEventListener("click", handleTitleClick);  /// 클릭하는걸 리스닝하고 있음. 발생하면 function이 동작하게 한다. 
title.addEventListener("mouseenter", handleMouseEnter);   /// 마우스가 올라갔을 때
title.addEventListener("mouseleave", handleMouseLeave);   /// 마우스가 떠났을 때

