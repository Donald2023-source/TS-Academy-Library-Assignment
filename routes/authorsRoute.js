const express = require("express");
const {
  createAuthor,
  fetchAllAuthors,
} = require("../controllers/authorController");

const router = express.Router();

router.post("/create", createAuthor);
router.get("/fetch-all", fetchAllAuthors);

module.exports = router;
