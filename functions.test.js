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

test("should be under 1700", () => {
  const load1 = 800;
  const load2 = 700;
  expect(load1 + load2).toBeLessThan(1700);
});

test("should be under or equal to 1700", () => {
  const load1 = 800;
  const load2 = 900;
  expect(load1 + load2).toBeLessThanOrEqual(1700);
});

test("there is no i in team", () => {
  expect("team").not.toMatch(/I/i);
});

test("admin should be in usernames", () => {
  usernames = ["john", "karen", "admin"];
  expect(usernames).toContain("admin");
});

//async data tests

test("user fetched name should be leanne graham", () => {
  expect.assertions(1);
  return functions.fetchUser().then((data) => {
    expect(data.name).toEqual("Leanne Graham");
  });
});
