const functions = require("./functions");

test("Adds 2 plus 2 to equal 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});

test("Adds 2 plus 2 to not equal 5", () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

test("should be null", () => {
  expect(functions.isNull()).toBe(null);
});

test("should be falsey", () => {
  expect(functions.checkValue(null)).toBeFalsy();
});

test("User should be Brandon Fillpot object", () => {
  expect(functions.createUser()).toEqual({
    firstName: "Brandon",
    lastName: "Fillpot",
  });
});
