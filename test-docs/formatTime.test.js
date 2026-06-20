// Tests for formatTime()
import { formatTime } from "../formatTime.js";

console.assert(
  formatTime(new Date("2024-01-01T09:05:00")) === "09:05",
  "formatTime Test 1 failed"
);

console.assert(
  formatTime(new Date("2024-01-01T23:59:00")) === "23:59",
  "formatTime Test 2 failed"
);

console.assert(
  typeof formatTime(new Date()) === "string",
  "formatTime Test 3 failed"
);

console.log("All formatTime tests passed!");