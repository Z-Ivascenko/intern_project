function validateLog(data) {
  const errors = [];
  const level = data?.level?.trim();
  const action = data?.action?.trim();

  const allowedLevels = ["info", "warn", "error"];

  if (!action) errors.push("Action is required");
  if (!level || !allowedLevels.includes(level)) {
    errors.push("Level must be one of: info, warn, error");
  }

  return errors;
}

module.exports = validateLog;
