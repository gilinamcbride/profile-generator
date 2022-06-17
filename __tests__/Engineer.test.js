const Engineer = require("../lib/Engineer");

test("gets github username", () => {
  const engineer = new Engineer(
    "Gilina",
    10,
    "gilinamcbride@gmail.com",
    "gilinamcbride"
  );
  expect(engineer.getGithub()).toEqual(
    expect.stringContaining(engineer.github)
  );
});

test("gets role", () => {
  const engineer = new Engineer(
    "Gilina",
    10,
    "gilinamcbride@gmail.com",
    "gilinamcbride"
  );
  expect(engineer.getRole()).toEqual(expect.stringContaining("Engineer"));
});
