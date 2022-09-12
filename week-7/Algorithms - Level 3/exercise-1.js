const wordScore = function (str) {
  let count = 0;

  let splitWords = str.toLowerCase().split(" ");

  let splitChar = splitWords.map((word) => word.split(""));

  let wordValues = splitChar.map((char) => {
    char.map((element) => (count += element.charCodeAt()));
    return count;
  });

  let largestValue = 0;
  let indexForLargestValue = 0;

  for (let i = 0; i < wordValues.length; i++) {
    if (largestValue < wordValues[i]) {
      largestValue = wordValues[i];
      indexForLargestValue = i;
    }
  }
  return splitWords[indexForLargestValue];
};

const result = wordScore("if you are a winner");
console.log(result);
