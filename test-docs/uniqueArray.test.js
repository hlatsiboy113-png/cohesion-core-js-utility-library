// Import the function we are testing
const uniqueArray = require('./uniqueArray');

// Test Case 1: Array with duplicate numbers
// We expect [1, 2, 2, 3, 3, 3, 4] to become [1, 2, 3, 4]
const test1 = uniqueArray([1, 2, 2, 3, 3, 3, 4]);
console.assert(
  test1.length === 4 && test1[0] === 1 && test1[1] === 2 && test1[2] === 3 && test1[3] === 4,
  "Test 1 failed: Expected [1, 2, 3, 4]"
);

