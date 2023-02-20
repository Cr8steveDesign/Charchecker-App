"use strict";

let inputArea = document.querySelector("#userWord");
console.log(inputArea);

// inputArea.value = "Wonderful";

let liveChk = document.querySelector("#liveCheck");
let genReport = document.querySelector("#generate");
let word1;
let vowel1 = [];
let number1 = [];
let consonant1 = [];
let whiteSpace1 = [];
let vowelLoop;
let wordCounter = document.querySelector("#wordNo");
let vowelCounter = document.querySelector("#vowels");
let consonantCounter = document.querySelector("#consonants");

let numberCounter = document.querySelector("#numbers");

let newVowel;
let newConsonant;
let newNumber;
let wordLoop;

function removeDuplicates(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}

inputArea.addEventListener("input", function () {
  liveChk.textContent = inputArea.value.length;
  console.log(inputArea.value);
  word1 = String(inputArea.value).split(" ").length;

  vowelLoop = String(inputArea.value).split("");

  wordLoop = String(inputArea.value).split(" ");
  console.log("Check out ", wordLoop);

  for (let i = 0; i < vowelLoop.length; i++) {
    if (
      vowelLoop[i] === "a" ||
      vowelLoop[i] === "e" ||
      vowelLoop[i] === "i" ||
      vowelLoop[i] === "o" ||
      vowelLoop[i] === "u"
      //   vowelLoop[i].toUpperCase() === "A" ||
      //   vowelLoop[i].toUpperCase() === "E" ||
      //   vowelLoop[i].toUpperCase() === "I" ||
      //   vowelLoop[i].toUpperCase() === "O" ||
      //   vowelLoop[i].toUpperCase() === "U"
    ) {
      vowel1.push(vowelLoop[i]);
    } else if (
      vowelLoop[i] === "1" ||
      vowelLoop[i] === "2" ||
      vowelLoop[i] === "3" ||
      vowelLoop[i] === "4" ||
      vowelLoop[i] === "5" ||
      vowelLoop[i] === "6" ||
      vowelLoop[i] === "7" ||
      vowelLoop[i] === "8" ||
      vowelLoop[i] === "9" ||
      vowelLoop[i] === "0"
    ) {
      number1.push(vowelLoop[i]);
    } else if (
      vowelLoop[i] !== " " &&
      vowelLoop[i] !== "." &&
      vowelLoop[i] !== "." &&
      vowelLoop[i] !== "," &&
      vowelLoop[i] !== ";" &&
      vowelLoop[i] !== "!" &&
      vowelLoop[i] !== "?" &&
      vowelLoop[i] !== ":" &&
      vowelLoop[i] !== "(" &&
      vowelLoop[i] !== ")" &&
      vowelLoop[i] !== "@" &&
      vowelLoop[i] !== "&" &&
      vowelLoop[i] !== "-" &&
      vowelLoop[i] !== "+" &&
      vowelLoop[i] !== "="
    ) {
      consonant1.push(vowelLoop[i]);
    } else if (vowelLoop[i] === " ") {
      whiteSpace1.push(vowelLoop[i]);
    }
  }
});

//   GENERATE BUTTON
genReport.addEventListener("click", function () {
  wordCounter.textContent = word1;
  console.log(word1);

  //REMOVING DUPLICATE FROM ENTRIES IN VOWEL CONSONANT AND NUMBER

  newVowel = removeDuplicates(vowel1);
  newConsonant = removeDuplicates(consonant1);
  newNumber = removeDuplicates(number1);
  //   newSpace = removeDuplicates(whiteSpace1);

  vowelCounter.textContent = String(newVowel.length);
  consonantCounter.textContent = String(newConsonant.length);
  numberCounter.textContent = String(newNumber.length);

  inputArea.addEventListener("click", function () {
    vowelCounter.textContent = "00";
    consonantCounter.textContent = "00";
    numberCounter.textContent = "00";
  });

  console.log(newVowel);
  console.log(newConsonant);
  console.log(newNumber);
});

//MUSIC PLAY BUTTON

let musicalBtn = document.querySelector("#music");
let playTrack = 0;
let audio = new Audio("jazz.mp3");
audio.volume = 0.4;

musicalBtn.addEventListener("click", function () {
  if (playTrack === 0) {
    audio.play();
    playTrack = 1;
  } else if (playTrack === 1) {
    audio.pause();
    playTrack = 0;
  }
});
