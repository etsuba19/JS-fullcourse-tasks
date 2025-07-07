// console.log(`hello world`);
// console.log(`MisirIsBae`);

// window.alert(`pop up window`);

// document.getElementById("h1id");

// let cat = 10;

// console.log(cat++);
// console.log(cat);
// console.log(cat + cat++ + ++cat + cat-- + --cat + cat + cat++ + ++cat + cat-- + --cat + cat + cat++ + ++cat + cat-- + --cat + cat);
// console.log(cat);

// let cow = window.prompt("what is the name of your cow?");
// console.log(cow);

// let user = 10;

// document.getElementById("mybtn").onclick = function() {
//   user = document.getElementById("myuser").value;
//   document.getElementById("h1id").textContent = `Hey ${user} Welcome to my website`;
// }

// console.log(user + "3"); // results in string "103"
// console.log("3" + user); // results in string "310"
// console.log(user - 3); // results in number 7
// console.log(user - "3"); // resutlts in number 7

// all the above result as such when the data is number already and it would have been the same if it was string

// console.log("30" - "10"); // results in a number
// console.log("30" + "10"); // results in a string
// console.log(30 + "2"); // results in string

const toConst = document.getElementById("toConst");
toConst.onclick = function(){
  window.location.href = "const.html";
}

const toCounter = document.getElementById("toCounter");
toCounter.onclick = function(){
  window.location.href = "counter.html";
}