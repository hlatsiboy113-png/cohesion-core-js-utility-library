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

// Test Case 2: Nested object
// We create an object with a nested object, clone it, change the nested value
const test2Original = { user: { name: "Charlie", address: { city: "NYC" } } };
const test2Clone = deepClone(test2Original);
test2Clone.user.address.city = "LA";
console.assert(
  test2Original.user.address.city === "NYC" && test2Clone.user.address.city === "LA",
  "Test 2 failed: Nested object should be deeply cloned"
);

// Test Case 3: Array
// We create an array, clone it, change the clone
const test3Original = [1, 2, 3];
const test3Clone = deepClone(test3Original);
test3Clone[0] = 99;
console.assert(
  test3Original[0] === 1 && test3Clone[0] === 99,
  "Test 3 failed: Array should be cloned"
);

// Test Case 4: Array of objects
// We create an array of objects, clone it, change the clone
const test4Original = [{ id: 1 }, { id: 2 }];
const test4Clone = deepClone(test4Original);
test4Clone[0].id = 100;
console.assert(
  test4Original[0].id === 1 && test4Clone[0].id === 100,
  "Test 4 failed: Array of objects should be deeply cloned"
);

// Test Case 5: Null value
// We clone null and verify it returns null
const test5Clone = deepClone(null);
console.assert(
  test5Clone === null,
  "Test 5 failed: null should return null"
);

console.log("All deepClone tests passed!");