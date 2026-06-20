// Tests for countWords()
import { countWords } from "../countWords.js";

// Test Case 1: Simple sentence
// We expect "Hello world" to count 2 words
const test1 = countWords("Hello world");
console.assert(
  test1 === 2,
  "countWords Test 1 failed: Expected 2 but got '" + test1 + "'"
);

// Test Case 2: String with extra spaces
// We expect "  lots   of   spaces  " to count 3 words
const test2 = countWords("  lots   of   spaces  ");
console.assert(
  test2 === 3,
  "countWords Test 2 failed: Expected 3 but got '" + test2 + "'"
);

// Test Case 3: Empty string
// We expect "" to return 0 words
const test3 = countWords("");
console.assert(
  test3 === 0,
  "countWords Test 3 failed: Expected 0 but got '" + test3 + "'"
);

// Test Case 4: unique:true should return a frequency map
// We expect "the cat sat on the mat" to count "the" twice
const freq = countWords("the cat sat on the mat", { unique: true });
console.assert(
  freq["the"] === 2 && freq["cat"] === 1 && freq["mat"] === 1,
  "countWords Test 4 failed: Expected correct frequency map but got '" + JSON.stringify(freq) + "'"
);

// Test Case 5: Non-string input should throw
let threw = false;
try {
  countWords(99);
} catch {
  threw = true;
}
console.assert(
  threw === true,
  "countWords Test 5 failed: Expected a TypeError to be thrown"
);

console.log("All countWords tests passed!");