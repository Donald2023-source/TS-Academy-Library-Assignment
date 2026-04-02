const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/database");
const booksRouter = require("./routes/booksRoute");
const authorRouter = require("./routes/authorsRoute");
const studentRouter = require("./routes/studentRoute");
const Attendant = require("./models/attendant");
const Student = require("./models/student");

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

app.use("/api/books", booksRouter);
app.use("/api/author", authorRouter);
app.use("/api/students", studentRouter);

app.get("/", (req, res) => {
  res.status(200).json({ message: "Server running" });
});

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Route ${req.originalUrl} not found`,
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
