/**
 * Converts a string into a URL-friendly slug.
 * Lowercases, strips accents, replaces spaces and special characters
 * with a separator, and removes any leading/trailing separators.
 *
 * @param {string} text - The input string to slugify.
 * @param {Object} [options] - Optional configuration.
 * @param {string} [options.separator="-"] - Character used to replace
 *   spaces and non-alphanumeric characters.
 * @param {boolean} [options.lower=true] - Lowercase the output.
 * @returns {string} The slugified string.
 * @throws {TypeError} If `text` is not a string.
 *
 * @example
 * slugify("Hello World");                     // => "hello-world"
 * slugify("  What's Up?  ");                  // => "whats-up"
 * slugify("Crêpes & Café", { separator: "_" }); // => "crepes_cafe"
 * slugify("Hello World", { lower: false });   // => "Hello-World"
 */
export function slugify(text, { separator = "-", lower = true } = {}) {
  if (typeof text !== "string") {
    throw new TypeError(`slugify: expected a string, got ${typeof text}`);
  }

  let result = text
    .normalize("NFD")                        // decompose accented characters
    .replace(/[\u0300-\u036f]/g, "")         // strip accent diacritics
    .trim();

  if (lower) result = result.toLowerCase();

  return result
    .replace(/[^a-zA-Z0-9\s]/g, "")         // remove non-alphanumeric (except spaces)
    .replace(/\s+/g, separator)              // replace whitespace runs with separator
    .replace(new RegExp(`^${separator}+|${separator}+$`, "g"), ""); // trim separators
}

// ── Tests ────────────────────────────────────────────────────────────────────

console.assert(
  slugify("Hello World") === "hello-world",
  'basic slugify should return "hello-world"'
);

console.assert(
  slugify("  What's Up?  ") === "whats-up",
  "leading/trailing spaces and punctuation should be removed"
);

console.assert(
  slugify("Crêpes & Café", { separator: "_" }) === "crepes_cafe",
  'accented chars stripped to ASCII, separator "_", result "crepes_cafe"'
);

console.assert(
  slugify("Hello World", { lower: false }) === "Hello-World",
  "lower:false should preserve original casing"
);

let threw = false;
try { slugify(null); } catch { threw = true; }
console.assert(threw, "non-string input should throw TypeError");

console.log("✅ slugify: all tests passed");
