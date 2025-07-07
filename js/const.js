const PI = 3.14159;
let r;
let c;

document.getElementById("mybtn").onclick = function(){
  r = document.getElementById("mytxt").value;
  r = Number(r);
  c = 2 * r * PI;
  document.getElementById("myh1").textContent = `Your circumfrance is ${c}cm`;
}


