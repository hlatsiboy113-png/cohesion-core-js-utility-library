// This function removes duplicate values from an array
// It takes an array as input and returns a new array with only unique values
// For example: uniqueArray([1, 2, 2, 3]) returns [1, 2, 3]

function uniqueArray(arr) {
  // I will first create an empty array to store the unique values
  let unique = [];


  // Now I loop through each element in the input array
  for (let i = 0; i < arr.length; i++) {
    // We get the current element
    const currentElement = arr[i];

// This is where I check if the element is already in the unique array
    // We use a flag to track if we found it
    let found = false;
    
    // I loop through the unique array to see if this element exists
    for (let j = 0; j < unique.length; j++) {
      // If i find the element, I set found to true
      if (unique[j] === currentElement) {
        found = true;
      }
    }

    // If we did not find the element, we add it to the unique array
    if (found === false) {
      unique.push(currentElement);
    }
  }
  
  // Finally we return the unique array
  return unique;
}

/**
 * This function takes an array and returns a new array with only unique values
 * @param {Array} arr The input array that may contain duplicate values
 * @returns {Array} A new array with only unique values
 */
function uniqueArrayDocumented(arr) {
  let result = [];
  
  for (let i = 0; i < arr.length; i++) {
    let isDuplicate = false;
    
    for (let j = 0; j < result.length; j++) {
      if (result[j] === arr[i]) {
        isDuplicate = true;
      }
    }
    
    if (!isDuplicate) {
      result.push(arr[i]);
    }
  }
  
  return result;
}