const functions = require("./functions");

const { add, checkValue, createUser, fetchUser } = functions;

test("Adds 2 + 2 to equal to 4", () => {
  expect(add(2, 2)).toBe(4);
});

test("Adds 2 + 2 to not equal to 5", () => {
  expect(add(2, 2)).not.toBe(5);
});

test("Should be truthy", () => {
  expect(checkValue(2)).toBeTruthy();
});

test("Should be falsy", () => {
  expect(checkValue(null)).toBeFalsy();
});

test("User should be Mehmet Eyupoglu object", () => {
  expect(createUser()).toEqual({
    firstName: "Mehmet",
    lastName: "Eyupoglu",
  });
});

test("User fetched name should be Leanne Graham ", () => {
  //   expect.assertions(1);
  return fetchUser().then((data) => {
    expect(data.name).toEqual("Leanne Graham");
  });
});

test("User fetched name should be Leanne Graham ", async () => {
  //   expect.assertions(1);
  const data = await fetchUser();
  expect(data.name).toEqual("Leanne Graham");
});
