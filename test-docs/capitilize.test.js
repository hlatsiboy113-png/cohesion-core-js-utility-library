// Tests for capitalize()
import { capitalize } from "../capitalize.js";

console.assert(capitalize("hello") === "Hello", "Test 1 failed");
console.assert(capitalize("Hello") === "Hello", "Test 2 failed");
console.assert(capitalize("") === "", "Test 3 failed");

console.log("All tests passed for capitalize!");