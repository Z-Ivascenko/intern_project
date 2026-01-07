const express = require("express");
require("dotenv").config();

const usersRouter = require("./routes/users");


const app = express();
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

// пункт 4.2 — ВОТ ЭТА СТРОКА
app.use("/", usersRouter);


const PORT = process.env.PORT || 3000;
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Serveris strādā: http://localhost:${PORT}`);
  });
}

module.exports = app;

