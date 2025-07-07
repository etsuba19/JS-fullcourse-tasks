const decrease = document.getElementById("nvbtn");
const increase = document.getElementById("psbtn");
const reset = document.getElementById("rsbtn");
const countlabel = document.getElementById("counter");
let count = 0;

decrease.onclick = function () {
  count--;
  countlabel.textContent = count;
};

increase.onclick = function () {
  count++;
  countlabel.textContent = count;
};

reset.onclick = function () {
  count = 0;
  countlabel.textContent = count;
};
