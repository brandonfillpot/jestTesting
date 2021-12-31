const reverseString = require("./reverseString");

test("reverse string function exists", () => {
  expect(reverseString).toBeDefined();
});

test("string reverses", () => {
  expect(reverseString("hello")).toEqual("olleh");
});
