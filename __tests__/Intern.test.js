const Intern = require("../lib/Intern");

test("gets intern's school", () => {
  const intern = new Intern("Gilina", 10, "gilinamcbride@gmail.com", "UNC");
  expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school));
});

test("gets intern's role", () => {
  const intern = new Intern("Gilina", 10, "gilinamcbride@gmail.com", "UNC");
  expect(intern.getRole()).toEqual(expect.stringContaining("Intern"));
});
