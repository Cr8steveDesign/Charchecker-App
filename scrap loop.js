for (let i = 0; i < vowelLoop.length; i++) {
  if (
    vowelLoop[i] === "a" ||
    vowelLoop[i] === "e" ||
    vowelLoop[i] === "i" ||
    vowelLoop[i] === "o" ||
    vowelLoop[i] === "u" ||
    vowelLoop[i] === "A" ||
    vowelLoop[i] === "E" ||
    vowelLoop[i] === "I" ||
    vowelLoop[i] === "O" ||
    vowelLoop[i] === "U"
  ) {
    vowel1.push(vowelLoop[i]);
    console.log(vowel1);
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
