const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/database");
const booksRouter = require("./routes/booksRoute");
dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

app.use("/api/books", booksRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
