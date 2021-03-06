"use strict";

const inputNumber = document.querySelector(".inputNumber");
const btnTest = document.querySelector(".btnTest");
const clue = document.querySelector(".clue");
const spanCounter = document.querySelector(".counter");
const finish = document.querySelector(".finish");

let counter = 0;
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

const generatedNumber = getRandomNumber(100);
console.log(generatedNumber);

function clueCount(msg) {
  clue.innerHTML = msg;
}

function counterCount() {
  counter += 1;
  spanCounter.innerHTML = counter;
}

// function BtnTestClickFinish(ev) {
//   ev.preventDefault(ev);
//   generatedNumber();
// }

function onBtnTestClick(ev) {
  ev.preventDefault();
  counterCount();

  const num = inputNumber.value;
  if (num > 100 || num < 1) {
    clueCount("El número debe estar entre 1 y 100");
  } else if (num < generatedNumber) {
    clueCount("Número demasiado bajo intentalo de nuevo");
  } else if (num > generatedNumber) {
    clueCount("Número demasiado alto intentalo de nuevo");
  } else if (num == generatedNumber) {
    clueCount("Has ganado campeona!!!");
  }
}

btnTest.addEventListener("click", onBtnTestClick);
// finish.addEventListener("click", onBtnTestClickFinish);
