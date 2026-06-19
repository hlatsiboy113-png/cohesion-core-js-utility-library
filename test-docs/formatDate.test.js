console.assert(formatDate(new Date("2024-01-01")) === "2024-01-01", "Test 1 failed");
console.assert(formatDate(new Date("2025-12-25")) === "2025-12-25", "Test 2 failed");
console.assert(typeof formatDate(new Date()) === "string", "Test 3 failed");