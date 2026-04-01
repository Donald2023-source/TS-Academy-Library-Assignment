const express = require("express");
const router = express.Router();
const { borrowBook, returnBook } = require("../controllers/bookController");

router.post("/:id/borrowBook", borrowBook);
router.post("/:id/return", returnBook);
module.exports = router;
