#!/usr/bin/env node

/**
 * Node.js CLI Calculator
 *
 * Supported operations:
 *   - Addition (+)
 *   - Subtraction (-)
 *   - Multiplication (×)
 *   - Division (÷)
 *
 * Based on requirements from the latest issue and calculator image.
 */

const readline = require('readline');

function calculate(a, b, op) {
  switch (op) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
    case 'x':
    case '×':
      return a * b;
    case '/':
    case '÷':
      if (b === 0) throw new Error('Division by zero is not allowed.');
      return a / b;
    default:
      throw new Error('Unsupported operation.');
  }
}

function prompt() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Enter first number: ', (first) => {
    const a = parseFloat(first);
    if (isNaN(a)) {
      console.log('Invalid number.');
      rl.close();
      return;
    }
    rl.question('Enter operation (+, -, ×, ÷): ', (op) => {
      if (!['+', '-', '*', 'x', '×', '/', '÷'].includes(op)) {
        console.log('Invalid operation.');
        rl.close();
        return;
      }
      rl.question('Enter second number: ', (second) => {
        const b = parseFloat(second);
        if (isNaN(b)) {
          console.log('Invalid number.');
          rl.close();
          return;
        }
        try {
          const result = calculate(a, b, op);
          console.log(`Result: ${result}`);
        } catch (err) {
          console.log('Error:', err.message);
        }
        rl.close();
      });
    });
  });
}

if (require.main === module) {
  prompt();
}
