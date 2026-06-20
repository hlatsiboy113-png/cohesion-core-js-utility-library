// Import the function
import { deepClone } from "../deepClone.js";

// Test Case 1: Cloning an object with a nested array
// We expect mutating the clone's nested array to NOT affect the original
const original1 = { name: "Cohesion", scores: [1, 2, 3] };
const clone1 = deepClone(original1);
clone1.scores.push(99);
console.assert(
  original1.scores.length === 3,
  "Test 1 failed: Expected original.scores length to stay 3 but got '" + original1.scores.length + "'"
);

// Test Case 2: Cloning a nested object
// We expect mutating the clone's nested object to NOT affect the original
const original2 = { user: { name: "Blakk", age: 21 } };
const clone2 = deepClone(original2);
clone2.user.age = 999;
console.assert(
  original2.user.age === 21,
  "Test 2 failed: Expected original.user.age to stay 21 but got '" + original2.user.age + "'"
);

// Test Case 3: Cloning null
// We expect deepClone(null) to return null
const test3 = deepClone(null);
console.assert(
  test3 === null,
  "Test 3 failed: Expected null but got '" + test3 + "'"
);

// Test Case 4: Cloning a primitive value
// We expect deepClone(42) to return 42 unchanged
const test4 = deepClone(42);
console.assert(
  test4 === 42,
  "Test 4 failed: Expected 42 but got '" + test4 + "'"
);

// Test Case 5: Cloning an array of objects
// We expect a fully independent copy, not just a shallow array copy
const original5 = [{ id: 1 }, { id: 2 }];
const clone5 = deepClone(original5);
clone5[0].id = 999;
console.assert(
  original5[0].id === 1,
  "Test 5 failed: Expected original5[0].id to stay 1 but got '" + original5[0].id + "'"
);

console.log("All deepClone tests passed!");