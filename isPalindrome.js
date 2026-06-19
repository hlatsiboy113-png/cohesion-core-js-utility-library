/**
 * Checks whether a string reads the same forwards and backwards.
 * Ignores case, spaces, and non-alphanumeric characters by default.
 *
 * @param {string} str - The string to test.
 * @param {Object} [options] - Optional configuration.
 * @param {boolean} [options.strict=false] - When true, no characters are
 *   stripped and case is preserved before comparing.
 * @returns {boolean} `true` if the string is a palindrome, otherwise `false`.
 * @throws {TypeError} If `str` is not a string.
 *
 * @example
 * isPalindrome("racecar");         // => true
 * isPalindrome("A man a plan a canal Panama"); // => true
 * isPalindrome("hello");           // => false
 * isPalindrome("RaceCar", { strict: true }); // => false
 */
export function isPalindrome(str, { strict = false } = {}) {
  if (typeof str !== "string") {
    throw new TypeError(`isPalindrome: expected a string, got ${typeof str}`);
  }

  const normalised = strict
    ? str
    : str.toLowerCase().replace(/[^a-z0-9]/g, "");

  return normalised === normalised.split("").reverse().join("");
}

// ── Tests ─────────────────────────────────────────────────────────────

console.assert(
  isPalindrome("racecar") === true,
  'isPalindrome("racecar") should be true'
);

console.assert(
  isPalindrome("A man a plan a canal Panama") === true,
  "spaces and mixed case should be ignored by default"
);

console.assert(
  isPalindrome("hello") === false,
  '"hello" is not a palindrome'
);

console.assert(
  isPalindrome("RaceCar", { strict: true }) === false,
  "strict mode should treat uppercase R and lowercase r as different"
);

let threw = false;
try { isPalindrome(123); } catch { threw = true; }
console.assert(threw, "non-string input should throw TypeError");

console.log("✅ isPalindrome: all tests passed");
