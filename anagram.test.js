const isAnagram = require("./anagram");

test("anagram function exists", () => {
  expect(typeof isAnagram).toEqual("function");
});

test('"cinema" is an anagram of "iceman"', () => {
  expect(isAnagram("cinema", "iceman")).toBeTruthy();
});

test('"Dormitory" is an anagram of "dirty room##"', () => {
  expect(isAnagram("Dormitory", "dirty room##")).toBeTruthy();
});

test('"beetle" is not an anagram of "teeball"', () => {
  expect(isAnagram("beetle", "teeball")).toBeFalsy();
});
