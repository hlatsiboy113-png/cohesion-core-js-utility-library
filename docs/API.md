# Utility Functions API Documentation

## uniqueArray(arr)

**Description:** Removes duplicate values from an array and returns a new array with only unique values.

**Parameters:**
- `arr` (Array): The input array that may contain duplicate values

**Returns:**
- (Array): A new array containing only unique values from the input array

**Time Complexity:** O(n²) - nested loops to check for duplicates

**Example:**
```javascript
uniqueArray([1, 2, 2, 3, 3, 3, 4]);
// Returns: [1, 2, 3, 4]

uniqueArray(['apple', 'banana', 'apple']);
// Returns: ['apple', 'banana']



How it works:

1.
Creates an empty array to store unique values

2.
Loops through each element in the input array

3.
For each element, checks if it already exists in the unique array

4.
If the element is not found, adds it to the unique array

5.
Returns the unique array




removeSpaces(str)

Description: Removes all spaces from a string and returns the string without spaces.

Parameters:

•
str (string): The input string that may contain spaces

Returns:

•
(string): The string with all spaces removed

Time Complexity: O(n) - single loop through the string

Example:

JavaScript


removeSpaces("hello world");
// Returns: "helloworld"

removeSpaces("  spaces  everywhere  ");
// Returns: "spaceseverywhere"



How it works:

1.
Creates an empty string to store the result

2.
Loops through each character in the input string

3.
If the character is not a space, adds it to the result string

4.
If the character is a space, skips it

5.
Returns the result string




deepClone(obj)

Description: Creates a complete deep copy of an object or array, including all nested objects and arrays. Changes to the copy do not affect the original.

Parameters:

•
obj (Object|Array): The object or array to clone

Returns:

•
(Object|Array): A deep copy of the input object or array

Time Complexity: O(n) where n is the total number of properties

Example:

JavaScript


const original = { name: "Alice", address: { city: "NYC" } };
const copy = deepClone(original);
copy.address.city = "LA";
console.log(original.address.city); // Still "NYC"

const originalArray = [1, [2, 3]];
const copyArray = deepClone(originalArray);
copyArray[1][0] = 99;
console.log(originalArray[1][0]); // Still 2



How it works:

1.
Checks if the input is null and returns null if it is

2.
Checks if the input is a primitive value and returns it as is

3.
Creates a new object or array depending on the input type

4.
Loops through each property in the original object

5.
For each property, recursively clones it if it is an object or array

6.
For primitive values, copies them directly

7.
Returns the cloned object

