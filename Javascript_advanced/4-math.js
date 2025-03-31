// Function that creates a division closure
function divideBy(firstNumber) {
  return function(secondNumber) {
    return secondNumber / firstNumber;
  };
}

// Function that creates an addition closure
function addBy(firstNumber) {
  return function(secondNumber) {
    return secondNumber + firstNumber;
  };
}

// Creating closures with fixed values
const addBy100 = addBy(100);
const addBy1000 = addBy(1000);
const divideBy10 = divideBy(10);
const divideBy100 = divideBy(100);
