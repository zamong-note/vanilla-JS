const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  clock.innerText = (`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
}

getClock()     // 한번 실행 후에 매 초마다 실행
setTimeout(getClock, 1000);
