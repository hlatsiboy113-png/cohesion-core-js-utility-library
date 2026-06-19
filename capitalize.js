/**
 * Capitalizes the first letter of a string
 * @param {string} text - The text to capitalize
 * @returns {string} The text with first letter capitalized
 * @example
 * capitalize("hello") // Returns "Hello"
 */
export function capitalize(text) {
    if (text.length === 0) return text;
    return text.charAt(0).toUpperCase() + text.slice(1);
}