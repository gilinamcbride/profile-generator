const Employee = require("../lib/Employee");

test("gets name", () => {
  const employee = new Employee("Gilina", 10, "gilinamcbride@gmail.com");
  expect(employee.getName()).toBe("Gilina");
});

test("gets id", () => {
  const employee = new Employee("Gilina", 10, "gilinamcbride@gmail.com");
  expect(employee.getId()).toEqual(expect.any(Number));
});

test("gets email", () => {
  const employee = new Employee("Gilina", 10, "gilinamcbride@gmail.com");
  expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email));
});

test("gets role", () => {
  const employee = new Employee("Gilina", 10, "gilinamcbride@gmail.com");
  expect(employee.getRole()).toEqual(expect.stringContaining("Employee"));
});

test("creates new employee obj", () => {
  const employee = new Employee("Gilina", 10, "gilinamcbride@gmail.com");
  expect(employee.getEmployeeObj()).toHaveProperty("name");
  expect(employee.getEmployeeObj()).toHaveProperty("id");
  expect(employee.getEmployeeObj()).toHaveProperty("email");
});
