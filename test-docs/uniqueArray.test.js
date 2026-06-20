// Import the function
import { uniqueArray } from "../uniqueArray.js";

// Test Case 1: Array with duplicate numbers
// We expect [1, 2, 2, 3, 3, 4] to become [1, 2, 3, 4]
const test1 = uniqueArray([1, 2, 2, 3, 3, 4]);
console.assert(
  JSON.stringify(test1) === JSON.stringify([1, 2, 3, 4]),
  "Test 1 failed: Expected '[1,2,3,4]' but got '" + JSON.stringify(test1) + "'"
);

// Test Case 2: Array with duplicate strings
// We expect ["a", "b", "a", "c"] to become ["a", "b", "c"]
const test2 = uniqueArray(["a", "b", "a", "c"]);
console.assert(
  JSON.stringify(test2) === JSON.stringify(["a", "b", "c"]),
  "Test 2 failed: Expected '[\"a\",\"b\",\"c\"]' but got '" + JSON.stringify(test2) + "'"
);

// Test Case 3: Array with no duplicates
// We expect [1, 2, 3] to stay [1, 2, 3]
const test3 = uniqueArray([1, 2, 3]);
console.assert(
  JSON.stringify(test3) === JSON.stringify([1, 2, 3]),
  "Test 3 failed: Expected '[1,2,3]' but got '" + JSON.stringify(test3) + "'"
);

// Test Case 4: Empty array
// We expect [] to return []
const test4 = uniqueArray([]);
console.assert(
  JSON.stringify(test4) === JSON.stringify([]),
  "Test 4 failed: Expected empty array but got '" + JSON.stringify(test4) + "'"
);

// Test Case 5: Array where every element is the same
// We expect [7, 7, 7, 7] to become [7]
const test5 = uniqueArray([7, 7, 7, 7]);
console.assert(
  JSON.stringify(test5) === JSON.stringify([7]),
  "Test 5 failed: Expected '[7]' but got '" + JSON.stringify(test5) + "'"
);

console.log("All uniqueArray tests passed!");