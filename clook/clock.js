const inputValue = window.document.querySelector("input");
const save = document.querySelector("button");
const audio = document.querySelector("audio");
const ul = document.querySelector("ul");
const hTo = document.querySelector("h2");
const lu = document.getElementById("lu").children;
save.addEventListener("click", savef);
let aryTime = [];
function saveClock() {
  let date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();
  hTo.innerHTML =
    (hh < 10 ? "0" + hh : hh) +
    " : " +
    (mm < 10 ? "0" + mm : mm) +
    " : " +
    (ss < 10 ? "0" + ss : ss);
  for (let index = 0; index < aryTime.length; index++) {
    if (
      `${hh < 10 ? "0" + hh : hh}:${mm < 10 ? "0" + mm : mm}` == aryTime[index]
    ) {
      aryTime.splice(index, 1);
      lu[index].style.color = "aqua";
      const text = new SpeechSynthesisUtterance("imad imad imad salat one");
      for (let i = 1; i <= 7; i++) {
        speechSynthesis.speak(text);
      }
      // audio.play();
      setTimeout(() => {
        removeJsx();
      }, 30000);
      // setTimeout(() => {
      //   audio.play();
      // }, 30000);
    }
  }

  setTimeout(function () {
    saveClock();
  }, 1000);
}
saveClock();
function savef() {
  if (inputValue.value == "") return;
  aryTime.push(inputValue.value);
  ul.innerHTML += `<li>${inputValue.value}</li>`;

  inputValue.value = "";
}

function removeJsx() {
  ul.innerHTML = "";
  for (let index = 0; index < aryTime.length; index++) {
    ul.innerHTML += `<li>${aryTime[index]}</li>`;
  }
}
