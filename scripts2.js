"use strict";

let inputArea = document.querySelector("#userWord");

// inputArea.value = "Wonderful";
let myUser = prompt(
  `Good day to you! Let's customize your experience. What's your name?`
);

let nameText = document.querySelector("#userName");

nameText.textContent = myUser;
let liveChk = document.querySelector("#liveCheck");
let genReport = document.querySelector("#generate");
let word1;
let vowel1 = [];
let number1 = [];
let consonant1 = [];
let vowelLoop;
let wordCounter = document.querySelector("#wordNo");
let vowelCounter = document.querySelector("#vowels");
let consonantCounter = document.querySelector("#consonants");
let newLongWord = document.querySelector("#longWord");
let switchBtn = document.querySelector("#switch");
let switchStyle = document.querySelector("link[href='styles.css']");

let numberCounter = document.querySelector("#numbers");

let clearArea = document.querySelector("#cleartext");

let newVowel;
let newConsonant;
let newNumber;
let wordLoop;
let latestVowel;
let vowelUpper;
let longWord1 = [];

function removeDuplicates(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}

inputArea.addEventListener("input", function () {
  liveChk.textContent = inputArea.value.length;
  word1 = String(inputArea.value).split(" ").length;
});

//REPORT GENERATOR
inputArea.addEventListener("change", function () {
  vowelLoop = String(inputArea.value.toUpperCase()).split("");
  console.log(vowelLoop);

  wordLoop = String(inputArea.value).split(" ");

  // vowelUpper = String(inputArea.value).toUpperCase().split(" ");

  // latestVowel = vowelUpper.toUpperCase();
});

//   GENERATE BUTTON
genReport.addEventListener("click", function () {
  if (inputArea.value.length < 3) {
    alert(
      `😉 We believe in miracles. But we can't analyze the text in your mind. Just the text in the box below. At least, for now. 😁`
    );
  } else {
    wordCounter.textContent = word1;

    for (let j = 0; j < wordLoop.length; j++) {
      if (wordLoop[j].length > 5) {
        longWord1.push(wordLoop[j]);
      }
    }

    for (let i = 0; i < vowelLoop.length; i++) {
      if (
        vowelLoop[i] === "A" ||
        vowelLoop[i] === "E" ||
        vowelLoop[i] === "I" ||
        vowelLoop[i] === "O" ||
        vowelLoop[i] === "U"
      ) {
        vowel1.push(vowelLoop[i]);
        // console.log(vowel1);
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
      }
    }

    //REMOVING DUPLICATE FROM ENTRIES IN VOWEL CONSONANT AND NUMBER
    //UPDATE THERE BECAME NO NEED TO REMOVE DUPLICATE SINCE THE LOOP NOW WASN'T UPDATING AFTER EVERY INPUT, BUT RATHER AFTER A CHANGE WEN THE OUTSIDE ENVIRONMENT IS CLICKED

    newVowel = vowel1;
    newConsonant = consonant1;
    newNumber = number1;

    vowelCounter.textContent = String(newVowel.length);
    consonantCounter.textContent = String(newConsonant.length);
    numberCounter.textContent = String(newNumber.length);

    newLongWord.textContent = String(longWord1.length);

    inputArea.addEventListener("click", function () {
      vowelLoop = 0;
      wordLoop = 0;
      longWord1 = [];
      word1 = 0;
      vowel1 = [];
      consonant1 = [];
      number1 = [];

      vowelCounter.textContent = "00";
      consonantCounter.textContent = "00";
      numberCounter.textContent = "00";
      newLongWord.textContent = "00";
      wordCounter.textContent = "00";
    });

    //RESET BUTTON

    clearArea.addEventListener("click", function () {
      vowelLoop = 0;
      wordLoop = 0;
      longWord1 = [];
      word1 = 0;
      vowel1 = [];
      consonant1 = [];
      number1 = [];

      inputArea.value = "";
      vowelCounter.textContent = "00";
      consonantCounter.textContent = "00";
      numberCounter.textContent = "00";
      newLongWord.textContent = "00";
      wordCounter.textContent = "00";
    });
  }
});

//MUSIC PLAY BUTTON

let musicalBtn = document.querySelector("#music");
let playTrack = 0;
let audio = new Audio("jazz.mp3");
audio.volume = 0.35;

musicalBtn.addEventListener("click", function () {
  if (playTrack === 0) {
    audio.play();
    playTrack = 1;
  } else if (playTrack === 1) {
    audio.pause();
    playTrack = 0;
  }
});

let cssCounter = 0;

switchBtn.addEventListener("click", function () {
  //STACK OVERFLOW CHANGING CSS WITH JS
  //   Query for it like you would any other element using document.querySelector or document.querySelectorAll.
  // document.querySelector("link[href='u1.css']").href = "u2.css";
  // Alternatively, you could also access it via document.styleSheets as well.
  // As an example:
  // // Change [href] on first stylesheet to u2.css
  // document.styleSheets[0].href = "u2.css";

  if (cssCounter === 0) {
    switchStyle.href = "styles.css";
    cssCounter++;
  } else if (cssCounter === 1) {
    switchStyle.href = "styles2.css";
    cssCounter++;
  } else if (cssCounter === 2) {
    switchStyle.href = "styles3.css";
    cssCounter = 0;
  }
});
