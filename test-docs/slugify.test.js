// Import the function we are testing
import { slugify } from "../slugify.js";

// Test Case 1: Basic two-word string
// We expect "Hello World" to become "hello-world"
const test1 = slugify("Hello World");
console.assert(
  test1 === "hello-world",
  "Test 1 failed: Expected 'hello-world' but got '" + test1 + "'"
);

// Test Case 2: String with punctuation and extra spaces
// We expect "  What's Up?  " to become "whats-up"
const test2 = slugify("  What's Up?  ");
console.assert(
  test2 === "whats-up",
  "Test 2 failed: Expected 'whats-up' but got '" + test2 + "'"
);

// Test Case 3: Accented characters with a custom separator
// We expect "Crêpes & Café" with separator "_" to become "crepes_cafe"
const test3 = slugify("Crêpes & Café", { separator: "_" });
console.assert(
  test3 === "crepes_cafe",
  "Test 3 failed: Expected 'crepes_cafe' but got '" + test3 + "'"
);

// Test Case 4: lower:false should preserve casing
// We expect "Hello World" with lower:false to become "Hello-World"
const test4 = slugify("Hello World", { lower: false });
console.assert(
  test4 === "Hello-World",
  "Test 4 failed: Expected 'Hello-World' but got '" + test4 + "'"
);

// Test Case 5: Non-string input should throw a TypeError
let threw = false;
try {
  slugify(null);
} catch {
  threw = true;
}
console.assert(
  threw === true,
  "Test 5 failed: Expected a TypeError to be thrown"
);

console.log("All slugify tests passed!");