const express = require("express");
const router = express.Router();
const { borrowBook, returnBook, createBook } = require("../controllers/bookController");

router.post("/:id/borrowBook", borrowBook);
router.post("/:id/return", returnBook);
router.post("/create", createBook)
module.exports = router;
