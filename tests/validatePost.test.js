const validatePost = require("../src/utils/validatePost");

describe("validatePost()", () => {
  test("valid input → returns empty array", () => {
    const errors = validatePost({ title: "Hello", content: "Text" });
    expect(errors).toEqual([]);
  });

  test("short title → returns title error", () => {
    const errors = validatePost({ title: "Hi", content: "Text" });
    expect(errors.join(" ").toLowerCase()).toContain("title");
  });

  test("empty content → returns content error", () => {
    const errors = validatePost({ title: "Hello", content: "" });
    expect(errors.join(" ").toLowerCase()).toContain("content");
  });

  test("empty object → does not crash and returns errors", () => {
    const errors = validatePost({});
    expect(Array.isArray(errors)).toBe(true);
    expect(errors.length).toBeGreaterThan(0);
  });
});
