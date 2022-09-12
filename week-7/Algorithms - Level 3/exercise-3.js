const charsToLength = function (str) {
  let arrayOfChar = str.toLowerCase().split("");
  let count = 0;
  for (let i = 0; i < arrayOfChar.length; i++) {
    if (arrayOfChar[i] == arrayOfChar[i + 1]) {
    }
    count++;
  }
};
