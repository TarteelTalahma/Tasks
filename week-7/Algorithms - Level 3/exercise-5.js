function add(a, b) {
  if ((a, b)) {
    return a + b;
  } else {
    return function (c) {
      return a + c;
    };
  }
}
console.log(add(2)(5));
console.log(add(2, 5));
