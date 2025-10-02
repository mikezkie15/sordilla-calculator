const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Functions
function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  if (b === 0) throw new Error("Division by zero is not allowed!");
  return a / b;
}
function average(numbers) {
  if (numbers.length === 0) throw new Error("No numbers provided!");
  let sum = 0;
  for (let n of numbers) sum += n;
  return sum / numbers.length;
}

// Menu Loop
function mainMenu() {
  console.log("\n--- Calculator Menu ---");
  console.log("1. Add");
  console.log("2. Subtract");
  console.log("3. Multiply");
  console.log("4. Divide");
  console.log("5. Average");
  console.log("6. Exit");

  rl.question("Choose an option: ", (choice) => {
    try {
      switch (choice) {
        case "1":
          askTwoNumbers((a, b) => console.log("Result:", add(a, b)));
          break;
        case "2":
          askTwoNumbers((a, b) => console.log("Result:", subtract(a, b)));
          break;
        case "3":
          askTwoNumbers((a, b) => console.log("Result:", multiply(a, b)));
          break;
        case "4":
          askTwoNumbers((a, b) => console.log("Result:", divide(a, b)));
          break;
        case "5":
          askMultipleNumbers((nums) => console.log("Average:", average(nums)));
          break;
        case "6":
          console.log("Goodbye!");
          rl.close();
          return;
        default:
          console.log("Invalid choice. Try again.");
      }
    } catch (err) {
      console.log("Error:", err.message);
    }
    mainMenu(); // Loop again
  });
}

// Helper functions for input
function askTwoNumbers(callback) {
  rl.question("Enter first number: ", (num1) => {
    rl.question("Enter second number: ", (num2) => {
      let a = parseFloat(num1);
      let b = parseFloat(num2);
      if (isNaN(a) || isNaN(b)) {
        console.log("Invalid input! Please enter numbers.");
      } else {
        callback(a, b);
      }
      mainMenu();
    });
  });
}

function askMultipleNumbers(callback) {
  rl.question("Enter numbers separated by space: ", (input) => {
    let numbers = input.split(" ").map(Number);
    if (numbers.some(isNaN)) {
      console.log("Invalid input! Please enter valid numbers.");
    } else {
      callback(numbers);
    }
    mainMenu();
  });
}

// Start program
mainMenu();
