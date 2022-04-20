const add = function (number1, number2) {
  result = number1 + number2;
  return result;
};

const subtract = function (number1, number2) {
  result = number1 - number2;
  return result;
};

// reduce() does not execute the function for empty array elements
// therefore needs the initial value 0 on line 17 
const sum = function (array) {
  return array.reduce(function (total, current) {
    return total + current;
  }, 0);
}

const multiply = function (array) {
  return array.reduce(function (total, current) {
    return total * current;
  }, 1);
}

const power = function (number1, number2) {
  result = Math.pow(number1, number2);
  return result;
};

const factorial = function factorialize(num) {
  result = num;
  if (num === 0 || num === 1)
    return 1;
  while (num > 1) {
    num--;
    result *= num;
  }
  return result;
}



// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
