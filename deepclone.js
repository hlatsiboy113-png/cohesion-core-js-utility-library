/**
 * Creates a deep copy of an object or array.
 * A deep copy means nested objects/arrays are copied too, not just
 * referenced — so changing the copy never affects the original.
 *
 * @param {Object|Array|*} obj - The value to clone (object, array, or primitive).
 * @returns {Object|Array|*} A deep copy of the input.
 */
export function deepClone(obj) {
  // First we check if the input is null
  // In JavaScript, typeof null returns "object", so we need to check this separately
  if (obj === null) {
    return null;
  }

  // We check if the input is not an object or array
  // If it is a primitive value (number, string, boolean, etc.), we return it as is
  if (typeof obj !== "object") {
    return obj;
  }

  // Now we know it is an object or array
  let cloned = Array.isArray(obj) ? [] : {};

  // Loop through each property in the original object
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      let value = obj[key];

      if (typeof value === "object" && value !== null) {
        cloned[key] = deepClone(value);
      } else {
        cloned[key] = value;
      }
    }
  }

  return cloned;
}