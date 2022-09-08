// set initial count
let count = 0;
// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }
    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0) {
      value.style.color = "blue";
    }
    value.textContent = count;
  });
});
// pembahasan lainnya lagi
let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count1 = 0;

function increment() {
  count1 += 1;
  countEl.textContent = count1;
}
function save() {
  let countStr = count1 + " - ";
  saveEl.textContent += countStr;
  countEl.textContent = 0;
  count1 = 0;
}
