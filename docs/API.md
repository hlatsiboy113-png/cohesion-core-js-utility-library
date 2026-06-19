formatDate(date)

Description: Formats a Date object into a standard YYYY-MM-DD string format.

Parameters:

date (Date): The date object to format

Returns:

(string): The formatted date in YYYY-MM-DD format

Time Complexity: O(1) - direct date property access

Example:

formatDate(new Date("2024-01-01"));
// Returns: "2024-01-01"

formatDate(new Date("2025-12-25"));
// Returns: "2025-12-25"

How it works:

1. Extracts the year from the Date object
2. Extracts the month and adds 1 (since months are 0-indexed)
3. Pads month with a leading zero if needed
4. Extracts the day and pads it with a leading zero if needed
5. Combines values into YYYY-MM-DD format
6. Returns the formatted string
formatTime(date)

Description: Formats a Date object into HH:MM (24-hour time) format.

Parameters:

date (Date): The date object to format

Returns:

(string): The formatted time in HH:MM format

Time Complexity: O(1) - direct date property access

Example:

formatTime(new Date("2024-01-01T09:05:00"));
// Returns: "09:05"

formatTime(new Date("2024-01-01T23:59:00"));
// Returns: "23:59"

How it works:

1. Extracts hours from the Date object
2. Extracts minutes from the Date object
3. Pads hours with a leading zero if needed
4. Pads minutes with a leading zero if needed
5. Combines them into HH:MM format
6. Returns the formatted string
7. randomInt(min, max)

Description: Generates a random integer between a minimum and maximum value (inclusive).

Parameters:

min (number): The minimum possible value
max (number): The maximum possible value

Returns:

(number): A random integer between min and max (inclusive)

Time Complexity: O(1) - constant time calculation

Example:

randomInt(1, 1);
// Returns: 1

randomInt(5, 5);
// Returns: 5

randomInt(1, 10);
// Returns: (any number from 1 to 10)

How it works:

1. Generates a random decimal between 0 and 1
2. Multiplies it by (max - min + 1)
3. Floors the result to get an integer
4. Adds the minimum value to shift the range
5. Returns a whole number within the range