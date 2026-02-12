const fs = require("fs");
const path = require("path");
const { createLogger, format, transports } = require("winston");


const logsDir = path.join(__dirname, "../../logs");
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir, { recursive: true });
}

const logger = createLogger({
  level: "info",
  format: format.combine(
    format.timestamp(),
    format.json()
  ),
  transports: [
    new transports.Console(),
    new transports.File({ filename: path.join(logsDir, "app.log") }),
  ],
});

module.exports = logger;
