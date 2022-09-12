const reverseString = function (str, len) {
  if (len == str.length) {
    return;
  }
  return reverseString(str, len + 1);
};

const reverseResult = reverseString("Hello", 0);
console.log(reverseResult);
