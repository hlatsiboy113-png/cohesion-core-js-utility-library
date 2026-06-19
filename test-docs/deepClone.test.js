// Import the function
const deepClone = require('./deepClone');

// Test Case 1: Simple object with primitive values
// We create an object, clone it, change the clone, and verify the original is unchanged
const test1Original = { name: "Alice", age: 25 };
const test1Clone = deepClone(test1Original);
test1Clone.name = "Bob";
console.assert(
  test1Original.name === "Alice" && test1Clone.name === "Bob",
  "Test 1 failed: Original should be unchanged"
);

