/**
 * Removes all spaces from a string.
 *
 * @param {string} str - The input string that may contain spaces.
 * @returns {string} The string with all spaces removed.
 *
 * @example
 * removeSpaces("hello world");
 * // => "helloworld"
 */
export function removeSpaces(str) {
  // Create an empty string to store the result
  let result = "";

  // Loop through each character in the input string
  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    // If it is not a space, add it to the result
    if (char !== " ") {
      result = result + char;
    }
  }

  return result;
}