# Utility Functions API Documentation

## capitalize(str)

**Description:** Capitalizes the first character of a string and returns the modified string.

**Parameters:**

* `str` (String): The input string to capitalize.

**Returns:**

* (String): A new string with the first character converted to uppercase.

**Time Complexity:** O(n) - string slicing creates a new string based on the input length.

**Example:**

```javascript
capitalize("hello");
// Returns: "Hello"

capitalize("javascript");
// Returns: "Javascript"
```

**How it works:**

1. Retrieves the first character of the input string.
2. Converts the first character to uppercase.
3. Extracts the remaining characters of the string.
4. Concatenates the uppercase first character with the remaining characters.
5. Returns the newly capitalized string.

---

## truncateText(text, maxLength)

**Description:** Shortens a string if it exceeds a specified maximum length and appends an ellipsis (`...`) to indicate truncation.

**Parameters:**

* `text` (String): The text to truncate.
* `maxLength` (Number): The maximum allowed length before truncation.

**Returns:**

* (String): The original text if its length is within the limit; otherwise, a truncated version followed by `...`.

**Time Complexity:** O(n) - may need to examine and copy characters from the string.

**Example:**

```javascript
truncateText("Hello World", 5);
// Returns: "Hello..."

truncateText("React", 10);
// Returns: "React"
```

**How it works:**

1. Checks the length of the input text.
2. Compares the length to the specified maximum length.
3. If the text length is less than or equal to the maximum length, returns the original text.
4. If the text length exceeds the limit, extracts characters up to the maximum length.
5. Appends `...` to the truncated text.
6. Returns the resulting string.

---

## reverseString(str)

**Description:** Reverses the order of characters in a string and returns the reversed string.

**Parameters:**

* `str` (String): The string to reverse.

**Returns:**

* (String): A new string with the characters in reverse order.

**Time Complexity:** O(n) - each character is processed once during the reverse operation.

**Example:**

```javascript
reverseString("hello");
// Returns: "olleh"

reverseString("JavaScript");
// Returns: "tpircSavaJ"
```

**How it works:**

1. Splits the string into an array of individual characters.
2. Reverses the order of the characters in the array.
3. Joins the reversed characters back into a single string.
4. Returns the reversed string.

---

## countWords(text, options?)

**Description:** Counts the number of words in a string. A word is any sequence of non-whitespace characters. Can optionally return a frequency map of unique words instead of a total count.

**Parameters:**

* `text` (String): The input string to analyse.
* `options` (Object, optional): Configuration options.
  * `unique` (Boolean, default `false`): When `true`, returns an object mapping each unique word to its frequency count instead of a plain number.
  * `ignoreCase` (Boolean, default `true`): Lowercases words before counting. Only applies when `unique` is `true`.

**Returns:**

* (Number): Total word count, by default.
* (Object): A frequency map `{ word: count }` when `unique` is `true`.

**Throws:**

* `TypeError` if `text` is not a string.

**Time Complexity:** O(n) - the string is split once and iterated through a single pass.

**Example:**

```javascript
countWords("Hello world");
// Returns: 2

countWords("  lots   of   spaces  ");
// Returns: 3

countWords("the cat sat on the mat", { unique: true });
// Returns: { the: 2, cat: 1, sat: 1, on: 1, mat: 1 }
```

**How it works:**

1. Validates that the input is a string, throwing a `TypeError` if not.
2. Trims the string and splits it on any run of whitespace characters.
3. Filters out any empty strings left behind by the split.
4. If `unique` is `false`, returns the length of the resulting word array.
5. If `unique` is `true`, reduces the word array into a frequency map, optionally lowercasing each word first.

---

## deepClone(obj)

**Description:** Creates a deep copy of an object or array, so nested values are not shared by reference with the original. Mutating the clone never affects the original.

**Parameters:**

* `obj` (Object | Array | \*): The value to clone. Can be an object, array, or primitive.

**Returns:**

* (Object | Array | \*): A deep copy of the input. Primitives and `null` are returned unchanged.

**Time Complexity:** O(n) - every nested property and array element is visited once.

**Example:**

```javascript
const original = { name: "Cohesion", scores: [1, 2, 3] };
const clone = deepClone(original);
clone.scores.push(99);

console.log(original.scores); // [1, 2, 3]      ← unaffected
console.log(clone.scores);    // [1, 2, 3, 99]
```

**How it works:**

1. Checks if the input is `null` and returns `null` immediately (since `typeof null` is `"object"` and needs special handling).
2. Checks if the input is a primitive (not an object) and returns it unchanged.
3. Creates a new empty array or empty object depending on the input's type.
4. Loops through each of the input's own properties.
5. Recursively clones any nested object or array values; copies primitive values directly.
6. Returns the fully cloned object or array.

---

## formatDate(date)

**Description:** Formats a `Date` object into `YYYY-MM-DD` format.

**Parameters:**

* `date` (Date): The date to format.

**Returns:**

* (String): The formatted date as `YYYY-MM-DD`.

**Time Complexity:** O(1) - fixed number of operations regardless of input.

**Example:**

```javascript
formatDate(new Date("2026-06-19"));
// Returns: "2026-06-19"

formatDate(new Date("2026-01-05"));
// Returns: "2026-01-05"
```

**How it works:**

1. Extracts the year using `getFullYear()`.
2. Extracts the month using `getMonth()`, adding 1 since JavaScript months are zero-indexed, then pads it to 2 digits.
3. Extracts the day using `getDate()` and pads it to 2 digits.
4. Combines year, month, and day into a single `YYYY-MM-DD` string using template literals.

> **Note:** This function expects an actual `Date` object as input, not a string. Passing a string will throw a `TypeError` since string values don't have a `getFullYear` method.

---

## formatTime(date)

**Description:** Formats a `Date` object into 24-hour `HH:MM` format.

**Parameters:**

* `date` (Date): The date/time to format.

**Returns:**

* (String): The formatted time as `HH:MM`.

**Time Complexity:** O(1) - fixed number of operations regardless of input.

**Example:**

```javascript
formatTime(new Date("2024-01-01T09:05:00"));
// Returns: "09:05"

formatTime(new Date("2024-01-01T23:59:00"));
// Returns: "23:59"
```

**How it works:**

1. Extracts the hour using `getHours()` and pads it to 2 digits.
2. Extracts the minute using `getMinutes()` and pads it to 2 digits.
3. Combines hour and minute into a single `HH:MM` string using template literals.

---

## isPalindrome(str, options?)

**Description:** Checks whether a string reads the same forwards and backwards. Ignores case, spaces, and non-alphanumeric characters by default.

**Parameters:**

* `str` (String): The string to test.
* `options` (Object, optional): Configuration options.
  * `strict` (Boolean, default `false`): When `true`, no characters are stripped and case is preserved before comparing.

**Returns:**

* (Boolean): `true` if the string is a palindrome, otherwise `false`.

**Throws:**

* `TypeError` if `str` is not a string.

**Time Complexity:** O(n) - the string is normalised and reversed, each a single pass over the characters.

**Example:**

```javascript
isPalindrome("racecar");
// Returns: true

isPalindrome("A man a plan a canal Panama");
// Returns: true

isPalindrome("hello");
// Returns: false

isPalindrome("RaceCar", { strict: true });
// Returns: false
```

**How it works:**

1. Validates that the input is a string, throwing a `TypeError` if not.
2. If `strict` is `false` (the default), lowercases the string and strips out all non-alphanumeric characters.
3. If `strict` is `true`, uses the string exactly as provided.
4. Reverses the normalised string by splitting into characters, reversing the array, and joining back together.
5. Compares the normalised string to its reversed version and returns the result.

---

## randomInt(min, max)

**Description:** Generates a random integer between `min` and `max`, inclusive.

**Parameters:**

* `min` (Number): The minimum value (inclusive).
* `max` (Number): The maximum value (inclusive).

**Returns:**

* (Number): A random integer in the range `[min, max]`.

**Time Complexity:** O(1) - a single calculation regardless of the range size.

**Example:**

```javascript
randomInt(1, 10);
// Returns: a random integer between 1 and 10, e.g. 7

randomInt(5, 5);
// Returns: 5 (min and max equal)
```

**How it works:**

1. Calculates the size of the range as `max - min + 1`.
2. Generates a random decimal between 0 (inclusive) and 1 (exclusive) using `Math.random()`.
3. Multiplies the random decimal by the range size and rounds down using `Math.floor()`.
4. Adds `min` to shift the result into the correct range.
5. Returns the resulting integer.

---

## removeSpaces(str)

**Description:** Removes all spaces from a string.

**Parameters:**

* `str` (String): The input string that may contain spaces.

**Returns:**

* (String): The string with all spaces removed.

**Time Complexity:** O(n) - each character in the string is examined once.

**Example:**

```javascript
removeSpaces("hello world");
// Returns: "helloworld"

removeSpaces("  spaces  everywhere  ");
// Returns: "spaceseverywhere"
```

**How it works:**

1. Creates an empty string to accumulate the result.
2. Loops through each character of the input string.
3. Checks whether the current character is a space.
4. If it is not a space, appends it to the result string.
5. If it is a space, skips it.
6. Returns the resulting string with all spaces removed.

---

## slugify(text, options?)

**Description:** Converts a string into a URL-friendly slug. Lowercases, strips accents, replaces spaces and special characters with a separator, and removes any leading/trailing separators.

**Parameters:**

* `text` (String): The input string to slugify.
* `options` (Object, optional): Configuration options.
  * `separator` (String, default `"-"`): The character used to replace spaces and stripped characters.
  * `lower` (Boolean, default `true`): Lowercases the result. Set to `false` to preserve the original casing.

**Returns:**

* (String): The slugified string, with no leading or trailing separators.

**Throws:**

* `TypeError` if `text` is not a string.

**Time Complexity:** O(n) - the string passes through a fixed sequence of single-pass transformations.

**Example:**

```javascript
slugify("Hello World");
// Returns: "hello-world"

slugify("  What's Up?  ");
// Returns: "whats-up"

slugify("Crêpes & Café", { separator: "_" });
// Returns: "crepes_cafe"

slugify("Hello World", { lower: false });
// Returns: "Hello-World"
```

**How it works:**

1. Validates that the input is a string, throwing a `TypeError` if not.
2. Normalises the string using Unicode NFD decomposition, splitting accented characters into a base letter plus a separate accent mark.
3. Strips out the accent marks, leaving plain ASCII letters, then trims whitespace from both ends.
4. Lowercases the result, unless `lower` is `false`.
5. Removes any remaining non-alphanumeric characters (punctuation, symbols).
6. Replaces runs of whitespace with the chosen separator.
7. Trims any leading or trailing separators left over from the replacement step.
8. Returns the final slug.

---

## uniqueArray(arr)

**Description:** Removes duplicate values from an array and returns a new array containing only unique values, preserving the original order.

**Parameters:**

* `arr` (Array): The input array that may contain duplicate values.

**Returns:**

* (Array): A new array with only unique values.

**Time Complexity:** O(n²) - each element is compared against every element already added to the result array.

**Example:**

```javascript
uniqueArray([1, 2, 2, 3, 3, 4]);
// Returns: [1, 2, 3, 4]

uniqueArray(["a", "b", "a", "c"]);
// Returns: ["a", "b", "c"]
```

**How it works:**

1. Creates an empty array to store unique values.
2. Loops through each element of the input array.
3. For each element, checks whether it already exists in the unique array by comparing it against every value currently stored there.
4. If the element is not found, adds it to the unique array.
5. If the element is already present, skips it.
6. Returns the array of unique values.