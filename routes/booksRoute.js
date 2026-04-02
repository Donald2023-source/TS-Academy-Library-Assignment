const express = require("express");
const router = express.Router();
const { borrowBook, returnBook, createBook, fetchAllBooks } = require("../controllers/bookController");

router.post("/:id/borrowBook", borrowBook);
router.post("/:id/return", returnBook);
router.post("/create", createBook)
router.get("/fetch-all", fetchAllBooks)
module.exports = router;
