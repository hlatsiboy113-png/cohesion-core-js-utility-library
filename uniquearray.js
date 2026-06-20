/**
 * Removes duplicate values from an array and returns a new array
 * containing only unique values, preserving original order.
 *
 * @param {Array} arr - The input array that may contain duplicate values.
 * @returns {Array} A new array with only unique values.
 *
 * @example
 * uniqueArray([1, 2, 2, 3]);
 * // => [1, 2, 3]
 */
export function uniqueArray(arr) {
  // Create an empty array to store the unique values
  let unique = [];

  // Loop through each element in the input array
  for (let i = 0; i < arr.length; i++) {
    const currentElement = arr[i];

    // Check if the element is already in the unique array
    let found = false;

    for (let j = 0; j < unique.length; j++) {
      if (unique[j] === currentElement) {
        found = true;
      }
    }

    // If we did not find the element, add it to the unique array
    if (found === false) {
      unique.push(currentElement);
    }
  }

  return unique;
}