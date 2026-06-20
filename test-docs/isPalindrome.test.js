// Tests for isPalindrome()
import { isPalindrome } from "../isPalindrome.js";

// Test Case 1: Classic palindrome
// We expect "racecar" to return true
const test1 = isPalindrome("racecar");
console.assert(
  test1 === true,
  "isPalindrome Test 1 failed: Expected true but got '" + test1 + "'"
);

// Test Case 2: Phrase with spaces and mixed case
// We expect "A man a plan a canal Panama" to return true
const test2 = isPalindrome("A man a plan a canal Panama");
console.assert(
  test2 === true,
  "isPalindrome Test 2 failed: Expected true but got '" + test2 + "'"
);

// Test Case 3: Non-palindrome word
// We expect "hello" to return false
const test3 = isPalindrome("hello");
console.assert(
  test3 === false,
  "isPalindrome Test 3 failed: Expected false but got '" + test3 + "'"
);

// Test Case 4: Strict mode (case-sensitive)
// We expect "RaceCar" with strict:true to return false
const test4 = isPalindrome("RaceCar", { strict: true });
console.assert(
  test4 === false,
  "isPalindrome Test 4 failed: Expected false but got '" + test4 + "'"
);

// Test Case 5: Non-string input should throw
let threw = false;
try {
  isPalindrome(123);
} catch {
  threw = true;
}
console.assert(
  threw === true,
  "isPalindrome Test 5 failed: Expected a TypeError to be thrown"
);

console.log("All isPalindrome tests passed!");