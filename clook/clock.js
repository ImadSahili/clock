const inputValue = window.document.querySelector("input");
const save = document.querySelector("button");
const audio = document.querySelector("audio");
const ul = document.querySelector("ul");
const hTo=document.querySelector("h2")
save.addEventListener("click", savef);
let aryTime = [];
function saveClock() {
  let date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds()
  hTo.innerHTML=( hh < 10 ? "0"+hh:hh)+" : "+( mm < 10 ? "0"+mm:mm)+" : "+( ss < 10 ? "0"+ss:ss)
  for (let index = 0; index < aryTime.length; index++) {
    if (`${hh}:${mm}` == aryTime[index]) {
      aryTime.splice(index, 1);
      audio.play();
      setTimeout(() => {
        removeJsx();
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

function removeJsx() {
  ul.innerHTML="<ul></ul>"
  for (let i = 0; i < aryTime.length; i++) {
    ul.innerHTML += `<li>${aryTime[i]}</li>`;
  }
}
