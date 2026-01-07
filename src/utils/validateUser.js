function validateUser(data) {
  const errors = [];

  if (!data || typeof data !== "object") {
    return ["Request body must be a JSON object."];
  }

  if (!data.name || data.name.trim().length < 2) {
    errors.push("Name is required and must be at least 2 characters.");
  }

  const emailRegex = /^[^@]+@[^@]+\.[^@]+$/;
  if (!data.email || !emailRegex.test(data.email)) {
    errors.push("A valid email is required.");
  }

  if (!data.password || data.password.length < 6) {
    errors.push("Password must be at least 6 characters.");
  }

  return errors;
}

module.exports = validateUser;
