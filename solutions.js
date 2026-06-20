// ============================================================
// solutions.js — cohesion-core-js-utility-library
// Week 8 · ZAIO | Cohesion Group
// Entry point that imports and demos every utility function.
// Run with: node solutions.js
// ============================================================

import { capitalize }    from "./capitalize.js";
import { countWords }    from "./countwords.js";
import { deepClone }     from "./deepclone.js";
import { formatDate }    from "./formatDate.js";
import { formatTime }    from "./formatTime.js";
import { isPalindrome }  from "./isPalindrome.js";
import { randomInt }     from "./randomInt.js";
import { removeSpaces }  from "./removespaces.js";
import { reverseString } from "./reverseString.js";
import { slugify }       from "./slugify.js";
import { truncateText }  from "./truncateText.js";
import { uniqueArray }   from "./uniquearray.js";
 
// ── capitalize ───────────────────────────────────────────────
console.log("=== capitalize ===");
console.log(capitalize("hello world"));              // Hello World
console.log(capitalize("the lord of the rings"));    // The Lord Of The Rings
 
// ── countWords ───────────────────────────────────────────────
console.log("\n=== countWords ===");
console.log(countWords("Hello beautiful world"));    // 3
console.log(countWords("  extra   spaces   "));      // 2
 
// ── deepClone ────────────────────────────────────────────────
console.log("\n=== deepClone ===");
const original = { name: "Cohesion", scores: [1, 2, 3] };
const clone = deepClone(original);
clone.scores.push(99);
console.log(original.scores); // [1, 2, 3]  ← unchanged
console.log(clone.scores);    // [1, 2, 3, 99]
 
// ── formatDate ───────────────────────────────────────────────
console.log("\n=== formatDate ===");
console.log(formatDate(new Date("2026-06-19")));
console.log(formatDate(new Date("2026-01-05")));
// ── formatTime ───────────────────────────────────────────────
console.log("\n=== formatTime ===");
console.log(formatTime(new Date("2026-06-19T09:05:00")));            // 09:05 AM or similar
 
// ── isPalindrome ─────────────────────────────────────────────
console.log("\n=== isPalindrome ===");
console.log(isPalindrome("racecar"));                                // true
console.log(isPalindrome("A man a plan a canal Panama"));            // true
console.log(isPalindrome("hello"));                                  // false
 
// ── randomInt ────────────────────────────────────────────────
console.log("\n=== randomInt ===");
const n = randomInt(1, 10);
console.log(n, n >= 1 && n <= 10);                                   // number, true
 
// ── removeSpaces ─────────────────────────────────────────────
console.log("\n=== removeSpaces ===");
console.log(removeSpaces("hello world"));                            // helloworld
console.log(removeSpaces("  spaces  everywhere  "));                 // spaceseverywhere
 
// ── reverseString ────────────────────────────────────────────
console.log("\n=== reverseString ===");
console.log(reverseString("JavaScript"));                            // tpircSavaJ
console.log(reverseString("ZAIO"));                                  // OIAZ
 
// ── slugify ──────────────────────────────────────────────────
console.log("\n=== slugify ===");
console.log(slugify("Hello World"));                                 // hello-world
console.log(slugify("What's Up? 2026"));                             // whats-up-2026
 
// ── truncateText ─────────────────────────────────────────────
console.log("\n=== truncateText ===");
console.log(truncateText("The quick brown fox", 12));                // The quick…
console.log(truncateText("Short", 20));                              // Short
 
// ── uniqueArray ──────────────────────────────────────────────
console.log("\n=== uniqueArray ===");
console.log(uniqueArray([1, 2, 2, 3, 3, 4]));                       // [1, 2, 3, 4]
console.log(uniqueArray(["a", "b", "a", "c"]));                     // ["a", "b", "c"]