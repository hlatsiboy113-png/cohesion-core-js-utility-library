// This function removes all spaces from a string
// Input: a string that may have spaces
// Output: the same string but without any spaces

function removeSpaces(str) {
  // We create an empty string to store the result
  let result = "";
  
  // We loop through each character in the input string
  for (let i = 0; i < str.length; i++) {
    // We get the character at position i
    let char = str[i];
    
    // We check if the character is a space
    // If it is not a space, we add it to the result
    if (char !== " ") {
      result = result + char;
    }
    // If it is a space, we skip it and do nothing
  }
  
  // We return the result string without spaces
  return result;
}
