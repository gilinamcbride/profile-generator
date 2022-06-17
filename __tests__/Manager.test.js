const Manager = require("../lib/Manager");

test("gets manager's office number", () => {
  const manager = new Manager("Gilina", 10, "gilinamcbride@gmail.com", 785);
  expect(manager.getOffice()).toEqual(expect.any(Number));
});

test("gets the name of the employee's role", () => {
  const manager = new Manager("Gilina", 10, "gilinamcbride@gmail.com", 785);
  expect(manager.getRole()).toEqual(expect.stringContaining("Manager"));
});
