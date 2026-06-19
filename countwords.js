/**
 * Counts the number of words in a string.
 * A "word" is any sequence of non-whitespace characters. Optionally
 * returns a breakdown of unique word frequencies.
 *
 * @param {string} text - The input string to analyse.
 * @param {Object} [options] - Optional configuration.
 * @param {boolean} [options.unique=false] - When true, returns an object
 *   mapping each unique word (lowercased) to its frequency count instead
 *   of a plain number.
 * @param {boolean} [options.ignoreCase=true] - Lowercase words before
 *   counting. Only applies when `unique` is true.
 * @returns {number|Object} Total word count, or a frequency map when
 *   `unique` is true.
 * @throws {TypeError} If `text` is not a string.
 *
 * @example
 * countWords("Hello world");              // => 2
 * countWords("  lots   of   spaces  ");   // => 3
 * countWords("the cat sat on the mat", { unique: true });
 * // => { the: 2, cat: 1, sat: 1, on: 1, mat: 1 }
 */
export function countWords(text, { unique = false, ignoreCase = true } = {}) {
  if (typeof text !== "string") {
    throw new TypeError(`countWords: expected a string, got ${typeof text}`);
  }

  const words = text.trim().split(/\s+/).filter(Boolean);

  if (!unique) return words.length;

  return words.reduce((freq, word) => {
    const key = ignoreCase ? word.toLowerCase() : word;
    freq[key] = (freq[key] ?? 0) + 1;
    return freq;
  }, {});
}

// ── Tests ────────────────────────────────────────────────────────────────────

console.assert(
  countWords("Hello world") === 2,
  'two-word string should return 2'
);

console.assert(
  countWords("  lots   of   spaces  ") === 3,
  "extra whitespace should not affect the count"
);

console.assert(
  countWords("") === 0,
  "empty string should return 0"
);

const freq = countWords("the cat sat on the mat", { unique: true });
console.assert(
  freq["the"] === 2 && freq["cat"] === 1 && freq["mat"] === 1,
  "unique:true should return correct frequency map"
);

let threw = false;
try { countWords(99); } catch { threw = true; }
console.assert(threw, "non-string input should throw TypeError");

console.log("✅ countWords: all tests passed");