// Import the function
const removeSpaces = require('./removeSpaces');

// Test Case 1: String with spaces in the middle
// We expect "hello world" to become "helloworld"
const test1 = removeSpaces("hello world");
console.assert(
  test1 === "helloworld",
  "Test 1 failed: Expected 'helloworld' but got '" + test1 + "'"
);

// Test Case 2: String with multiple spaces
// We expect "  spaces  everywhere  " to become "spaceseverywhere"
const test2 = removeSpaces("  spaces  everywhere  ");
console.assert(
  test2 === "spaceseverywhere",
  "Test 2 failed: Expected 'spaceseverywhere' but got '" + test2 + "'"
);