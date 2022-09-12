//(5, 4, 3) => 5
//(5, 4, " ") => 5
//(5, 4, 'a') => 5
//(1, 1, 1) => 1
//(2, 2, 1) => 2

const maxNumber = function (a, b, c) {
  let arr = [a, b, c];
  let maxNum = typeof arr[0] == "number";
  for (let i = 1; i < arr.length; i++) {
    if (maxNum < arr[i] && typeof arr[i] == "number") {
      maxNum = arr[i];
    }
  }
  return maxNum;
};

console.log(maxNumber(9, 5, 4));
console.log(maxNumber(9, 5, ""));
console.log(maxNumber(9, 5, "a"));
console.log(maxNumber(9, 9, 9));
console.log(maxNumber(2, 2, 1));
console.log(maxNumber("a", 9, 9));
console.log(maxNumber(5, 4, 9));
