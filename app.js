// 2qwJRrLRlVNTzgv8
require("dotenv").config();
const mongoose = require("mongoose");
const URI = process.env.DB_HOST;

async function run() {
  try {
    await mongoose.connect(URI);
    process.exit(1);
  } catch (error) {
    console.log(error);
    process.exit(1);
  } finally {
    mongoose.disconnect();
  }
}
run();

const express = require("express");
const logger = require("morgan");
const cors = require("cors");

const contactsRouter = require("./routes/api/contacts");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/api/contacts", contactsRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  res.status(400).json({ message: err.message });
});

module.exports = app;
