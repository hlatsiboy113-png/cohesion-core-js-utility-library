// Import the function we are testing
const uniqueArray = require('./uniqueArray');

// Test Case 1: Array with duplicate numbers
// We expect [1, 2, 2, 3, 3, 3, 4] to become [1, 2, 3, 4]
const test1 = uniqueArray([1, 2, 2, 3, 3, 3, 4]);
console.assert(
  test1.length === 4 && test1[0] === 1 && test1[1] === 2 && test1[2] === 3 && test1[3] === 4,
  "Test 1 failed: Expected [1, 2, 3, 4]"
);

// Test Case 2: Array with duplicate strings
// We expect ['apple', 'banana', 'apple'] to become ['apple', 'banana']
const test2 = uniqueArray(['apple', 'banana', 'apple']);
console.assert(
  test2.length === 2 && test2[0] === 'apple' && test2[1] === 'banana',
  "Test 2 failed: Expected ['apple', 'banana']"
);

// Test Case 3: Array with no duplicates
// We expect [1, 2, 3] to stay [1, 2, 3]
const test3 = uniqueArray([1, 2, 3]);
console.assert(
  test3.length === 3 && test3[0] === 1 && test3[1] === 2 && test3[2] === 3,
  "Test 3 failed: Expected [1, 2, 3]"
);

// Test Case 4: Empty array
// We expect [] to return []
const test4 = uniqueArray([]);
console.assert(
  test4.length === 0,
  "Test 4 failed: Expected empty array"
);