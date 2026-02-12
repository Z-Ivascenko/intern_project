const express = require("express");
require("dotenv").config();

const usersRouter = require("./routes/users");
const requestLogger = require("./middleware/requestLogger");
const logger = require("./utils/logger");

const app = express();

app.use(requestLogger);
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.use("/", usersRouter);


app.use((err, req, res, next) => {
  logger.error("Unhandled error", {
    message: err.message,
    stack: err.stack,
    code: err.code,
    errno: err.errno,
    sqlMessage: err.sqlMessage,
    path: req.path,
    method: req.method,
  });

  res.status(500).json({
    error: {
      code: "INTERNAL",
 
      message: process.env.NODE_ENV === "production" ? "Internal server error" : err.message,
    },
  });
});
const PORT = process.env.PORT || 3000;

if (require.main === module) {
  app.listen(PORT, () => {
    logger.info("Server started", { url: `http://localhost:${PORT}` });
    console.log(`Serveris strādā: http://localhost:${PORT}`);
  });
}

module.exports = app;
