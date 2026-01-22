const usersService = require("../services/usersService");

async function getUsers(req, res, next) {
  try {
    const result = await usersService.getUsers(req.query);
    return res.json(result);
  } catch (err) {
    return next(err);
  }
}

async function createUser(req, res, next) {
  try {
    const created = await usersService.createUser(req.body);
    return res.status(201).json(created);
  } catch (err) {
    return next(err);
  }
}

module.exports = { getUsers, createUser };