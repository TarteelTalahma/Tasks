const camelCase = function (str) {
  let functionName = str.toLowerCase().split(" ");
  let finalResult = functionName[0];
  for (let i = 1; i < functionName.length; i++) {
    finalResult +=
      functionName[i].charAt(0).toUpperCase() + functionName[i].slice(1);
  }
  return finalResult;
};

console.log(camelCase("hello case"));
