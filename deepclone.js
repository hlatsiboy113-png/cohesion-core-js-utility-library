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

  // Now we know it is an object or array
  // We create a new object or array depending on what the input is
  let cloned;
  
  // If it is an array, we create a new array
  if (Array.isArray(obj)) {
    cloned = [];
  } else {
    // If it is an object, we create a new object
    cloned = {};
  }
  
  // Now we loop through each property in the original object
  for (let key in obj) {
    // We check if this property belongs to the object itself, not inherited
    if (obj.hasOwnProperty(key)) {
      // We get the value of this property
      let value = obj[key];
      
      // We check if the value is an object or array
      if (typeof value === "object" && value !== null) {
        // If it is, we recursively clone it
        cloned[key] = deepClone(value);
      } else {
        // If it is not, we just copy it directly
        cloned[key] = value;
      }
    }
  }
  
   // Finally we return the cloned object
  return cloned;
}

/**
 * Creates a deep copy of an object or array
 * @param {Object|Array} obj The object or array to clone
 * @returns {Object|Array} A deep copy of the input
 */
function deepCloneDocumented(obj) {
  if (obj === null) {
    return null;
  }
  
  if (typeof obj !== "object") {
    return obj;
  }
  
  let result;
  
  if (Array.isArray(obj)) {
    result = [];
  } else {
    result = {};
  }
  
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      if (typeof obj[prop] === "object" && obj[prop] !== null) {
        result[prop] = deepCloneDocumented(obj[prop]);
      } else {
        result[prop] = obj[prop];
      }
    }
  }
  
  return result;
}

// Export the function
module.exports = deepClone;