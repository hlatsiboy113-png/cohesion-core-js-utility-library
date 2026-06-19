// Tests for formatDate()

console.assert(
  formatDate(new Date("2024-01-01")) === "2024-01-01",
  "formatDate Test 1 failed"
);

console.assert(
  formatDate(new Date("2025-12-25")) === "2025-12-25",
  "formatDate Test 2 failed"
);

const dateResult = formatDate(new Date("2000-06-19"));
console.assert(
  typeof dateResult === "string",
  "formatDate Test 3 failed"
);