const validateLog = require("../src/utils/validateLog");

test("valid input → returns empty array", () => {
  const errors = validateLog({
    level: "info",
    action: "create",
    entity: "post",
    entity_id: 1,
    user_id: 1,
  });

  expect(errors).toEqual([]);
});
