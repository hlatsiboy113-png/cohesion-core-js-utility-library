// Tests for reverseString()
import { reverseString } from "../reverseString.js";

console.assert(
  reverseString("hello") === "olleh",
  "reverseString test 1 failed"
);

console.assert(
  reverseString("abc") === "cba",
  "reverseString test 2 failed"
);

console.assert(
  reverseString("12345") === "54321",
  "reverseString test 3 failed"
);

console.log("All tests passed for reverseString!");