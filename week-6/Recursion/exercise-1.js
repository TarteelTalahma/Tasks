const factorialNumber = function (num) {
  if (num > 0) return num * factorialNumber(num - 1);
  return 1;
};

factorialNumber(3);
