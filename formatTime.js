/**
 * Formats a Date object into 24-hour HH:MM format.
 *
 * @param {Date} date - The date/time to format.
 * @returns {string} The formatted time as "HH:MM".
 *
 * @example
 * formatTime(new Date("2024-01-01T09:05:00"));
 * // => "09:05"
 */
export function formatTime(date) {
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  return `${hours}:${minutes}`;
}