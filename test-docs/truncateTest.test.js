console.assert(
  truncateText("Hello World", 5) === "Hello...",
  "truncateText test 1 failed"
);

console.assert(
  truncateText("React", 10) === "React",
  "truncateText test 2 failed"
);

console.assert(
  truncateText("Programming", 4) === "Prog...",
  "truncateText test 3 failed"
);

console.log("All tests passed for truncateText!");

