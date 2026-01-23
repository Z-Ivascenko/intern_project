class Log {
  constructor({ id, userId, action, level, createdAt }) {
    this.id = id;
    this.userId = userId;
    this.action = action;
    this.level = level;
    this.createdAt = createdAt;
  }
}

module.exports = Log;
