const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  test("create an engineer", () => {
    const engineer = new Engineer("Heather", 2, "heather@email.com", "github");

    expect(engineer.name).toEqual("Heather");
    expect(engineer.id).toEqual(2);
    expect(engineer.email).toEqual("heather@email.com");
    expect(engineer.github).toEqual("github");
  });
});