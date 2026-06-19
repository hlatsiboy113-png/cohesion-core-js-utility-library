/**
 * Truncates text if it exceeds the specified length.
 *
 * @param {string} text - Text to truncate.
 * @param {number} maxLength - Maximum allowed length.
 * @returns {string} Truncated text.
 */
export function truncateText(text, maxLength) {
  return text.length > maxLength
    ? text.slice(0, maxLength) + "..."
    : text;
}

