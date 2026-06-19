// Import the function
const removeSpaces = require('./removeSpaces');

// Test Case 1: String with spaces in the middle
// We expect "hello world" to become "helloworld"
const test1 = removeSpaces("hello world");
console.assert(
  test1 === "helloworld",
  "Test 1 failed: Expected 'helloworld' but got '" + test1 + "'"
);