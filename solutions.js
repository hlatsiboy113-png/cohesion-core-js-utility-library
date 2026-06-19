// solutions.js
import { isPalindrome } from "./utils/isPalindrome.js";
import { slugify }      from "./utils/slugify.js";
import { countWords }   from "./utils/countWords.js";

// ── Demo / smoke-run ─────────────────────────────────────────────
console.log(isPalindrome("racecar"));           // true
console.log(slugify("Hello World"));            // hello-world
console.log(countWords("the cat sat on the mat", { unique: true }));