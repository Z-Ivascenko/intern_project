const validateUser = require("../src/utils/validateUser");

describe("validateUser()", () => {
  test("valid input → returns empty array", () => {
    const errors = validateUser({
      name: "Anna",
      email: "anna@test.com",
      password: "123456",
    });

    expect(errors).toEqual([]);
  });

  test("short name → returns name error", () => {
    const errors = validateUser({
      name: "A",
      email: "anna@test.com",
      password: "123456",
    });

    expect(errors.join(" ").toLowerCase()).toContain("name");
  });

  test("invalid email → returns email error", () => {
    const errors = validateUser({
      name: "Anna",
      email: "not-an-email",
      password: "123456",
    });

    expect(errors.join(" ").toLowerCase()).toContain("email");
  });

  test("short password → returns password error", () => {
    const errors = validateUser({
      name: "Anna",
      email: "anna@test.com",
      password: "123",
    });

    expect(errors.join(" ").toLowerCase()).toContain("password");
  });

  test("multiple invalid fields → returns multiple errors", () => {
    const errors = validateUser({
      name: "",
      email: "abc",
      password: "",
    });

    expect(errors.length).toBeGreaterThan(1);
  });

  test("empty object → does not crash and returns errors", () => {
    const errors = validateUser({});

    expect(Array.isArray(errors)).toBe(true);
    expect(errors.length).toBeGreaterThan(0);
  });
});
