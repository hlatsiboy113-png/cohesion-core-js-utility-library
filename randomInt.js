// Import the function
import { randomInt } from "../randomInt.js";
 
console.assert(
  randomInt(1, 1) === 1,
  "randomInt Test 1 failed"
);
 
console.assert(
  randomInt(5, 5) === 5,
  "randomInt Test 2 failed"
);
 
const val = randomInt(1, 10);
console.assert(
  val >= 1 && val <= 10,
  "randomInt Test 3 failed"
);
 
console.log("All randomInt tests passed!");