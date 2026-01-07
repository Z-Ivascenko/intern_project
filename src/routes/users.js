const express = require("express");
const bcrypt = require("bcrypt");

const validateUser = require("../utils/validateUser");
const { createUser, getUsers } = require("../db/db");

const router = express.Router();

const { sendError } = require("../utils/httpError");


router.post("/users", async (req, res, next) => {
  try {
    const errors = validateUser(req.body);
    if (errors.length) {
      return res
        .status(400)
        .json({ error: { code: "VALIDATION", message: errors.join(", ") } });
    }

    const { name, email, password } = req.body;

    const passwordHash = await bcrypt.hash(password, 10);

    try {
      const id = await createUser(
        name.trim(),
        email.trim().toLowerCase(),
        passwordHash
      );
      return res.status(201).json({
        id,
        name: name.trim(),
        email: email.trim().toLowerCase(),
      });
    } catch (err) {
      // MySQL duplicate уникального поля (email UNIQUE)
      if (err && err.code === "ER_DUP_ENTRY") {
        return res.status(400).json({
          error: { code: "DUPLICATE", message: "User with this email already exists." },
        });
      }
      throw err;
    }
  } catch (err) {
    next(err);
  }
});

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

router.get("/users", async (req, res, next) => {
  try {
    const { email, page = "1", limit = "10" } = req.query;

    if (email && !isValidEmail(email)) {
      return sendError(res, 400, "INVALID_EMAIL", "Email filter is invalid");
    }

    const pageNum = Number(page);
    const limitNum = Number(limit);

    if (!Number.isInteger(pageNum) || pageNum < 1) {
      return sendError(res, 400, "INVALID_PAGE", "page must be >= 1");
    }

    if (!Number.isInteger(limitNum) || limitNum < 1 || limitNum > 100) {
      return sendError(res, 400, "INVALID_LIMIT", "limit must be between 1 and 100");
    }

    const users = await getUsers({
      email,
      page: pageNum,
      limit: limitNum,
    });

    return res.json(users);
  } catch (err) {
    console.error("GET /users error:", err);
    return sendError(res, 500, "INTERNAL", "Internal server error");
  }
});


module.exports = router;
