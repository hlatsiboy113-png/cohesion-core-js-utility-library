// This function creates a deep copy of an object
// A deep copy means that even nested objects are copied, not just referenced
// If you change the copy, the original stays the same

function deepClone(obj) {
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