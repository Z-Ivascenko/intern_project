# Middleware design

## User validation middleware (pseudo-code)

function validateUser(req, res, next) {
  const errors = [];

  if (!req.body.name || req.body.name.length < 2) {
    errors.push("Name too short");
  }

  if (!req.body.email || !req.body.email.includes("@")) {
    errors.push("Invalid email");
  }

  if (!req.body.password || req.body.password.length < 6) {
    errors.push("Password too short");
  }

  if (errors.length > 0) {
    return res.status(400).json({
      error: {
        code: "VALIDATION_ERROR",
        message: errors.join(", ")
      }
    });
  }

  next();
}
