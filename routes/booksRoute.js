const express = require("express");
const router = express.Router();
const {
  borrowBook,
  returnBook,
  createBook,
  fetchAllBooks,
  fetchBookById,
  updateBook,
} = require("../controllers/bookController");

router.post("/:id/borrowBook", borrowBook);
router.post("/:id/return", returnBook);
router.post("/create", createBook);
router.get("/fetch-all", fetchAllBooks);
router.get("/:id/get-book", fetchBookById);
router.put("/:id/update", updateBook);
module.exports = router;
