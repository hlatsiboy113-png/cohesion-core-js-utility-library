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

```
```
