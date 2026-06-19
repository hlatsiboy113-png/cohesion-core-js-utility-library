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

