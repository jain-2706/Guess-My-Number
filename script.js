"use strict";
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
document.querySelector(".check").addEventListener("click", function () {
  let num = document.querySelector(".enter").value;
  console.log(num);
  if (num == "")
    document.querySelector(".message").textContent = "Not a Number...";
  else {
    num = Number(num);
    if (num == secretNumber) {
      document.querySelector(".message").textContent = "🎉🎉Correct Number";
      document.querySelector(".number").textContent = secretNumber;
      document.querySelector("body").style.backgroundColor = "green";
      if (score > highscore) {
        highscore = score;
        document.querySelector(".highscore").textContent = highscore;
      }
    } else {
      if (score > 1) {
        document.querySelector(".message").textContent =
          num > secretNumber ? "📈📈Too High" : "📉📉Too Low";
        score--;
        document.querySelector(".score").textContent = score;
      } else {
        document.querySelector(".message").textContent =
          "😞😞You Lost the Game";
        document.querySelector(".score").textContent = 0;
      }
    }
  }
});
document.querySelector(".modify").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = score;
  document.querySelector("body").style.backgroundColor = "rgba(0, 0, 0, 0.938)";
  document.querySelector(".message").textContent = "Start Guessing...";
  document.querySelector(".enter").value = "";
});
