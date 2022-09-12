const uniqueCharacters = function (str) {
  let arrayOfChar = str.toLowerCase().split("");
  arrayOfChar.sort();

  for (let i = 0; i < arrayOfChar.length - 1; i++) {
    if (arrayOfChar[i] != arrayOfChar[i + 1]) {
      continue;
    } else {
      return false;
    }
  }
  return true;
};

let result = uniqueCharacters("cat");
console.log(result);
