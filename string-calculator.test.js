const add = require("./string-calculator");

test("should return 0 for an empty string", () => {
  expect(add("")).toBe(0);
});

test("should return the number itself for a single number", () => {
  expect(add("1")).toBe(1);
  expect(add("5")).toBe(5);
});

test("should return the sum of two numbers", () => {
  expect(add("1,2")).toBe(3);
  expect(add("3,7")).toBe(10);
});

test("should handle new lines between numbers", () => {
  expect(add("1\n2,3")).toBe(6);
});

test("should support different delimiters", () => {
  expect(add("//;\n1;2")).toBe(3);
  expect(add("//|\n1|3|5")).toBe(9);
});

test("should throw an exception for negative numbers", () => {
  expect(() => add("1,-2,3")).toThrow("Negative numbers not allowed: -2");
});

test("should show all negative numbers in the exception message", () => {
  expect(() => add("1,-2,-3")).toThrow("Negative numbers not allowed: -2, -3");
});
