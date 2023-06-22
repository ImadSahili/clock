const inputValue = window.document.querySelector("input");
const save = document.querySelector("button");
const audio = document.querySelector("audio");
const ul = document.querySelector("ul");

save.addEventListener("click", savef);
let aryTime = [];
function saveClock() {
  let date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();
  for (let index = 0; index < aryTime.length; index++) {
    if (`${"0" + hh}:${mm}` == aryTime[index]) {
      aryTime.splice(index, 1);
      audio.play();
      setTimeout(() => {
        limit();
      }, 30000);
      // setTimeout(() => {
      //   audio.play();
      // }, 30000);
    }
  }
  // console.log(`${hh}:${mm}`)
  // console.log(inputValue.value)
  // console.log(ul);
  setTimeout(function () {
    saveClock();
  }, 1000);
}
saveClock();
function savef() {
  aryTime.push(inputValue.value);
  ul.innerHTML += `<li>${inputValue.value}</li>`;
}

function limit() {
  ul.innerHTML="<ul></ul>"
  for (let i = 0; i < aryTime.length; i++) {
    ul.innerHTML += `<li>${aryTime[i]}</li>`;
  }
}
