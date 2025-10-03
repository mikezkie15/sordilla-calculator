const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Functions
function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  if (y === 0) {
    return "Error: Division by zero is not allowed.";
  }
  return x / y;
}

function average(numbers) {
  if (numbers.length === 0) return "Error: No numbers to average.";
  return numbers.reduce((a, b) => a + b, 0) / numbers.length;
}
