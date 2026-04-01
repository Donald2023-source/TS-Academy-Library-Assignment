const express = require("express");
const {
  createAuthor,
  fetchAllAuthors,
  fetchAuthorById,
  updateAuthor,
} = require("../controllers/authorController");

const router = express.Router();

router.post("/create", createAuthor);
router.get("/fetch-all", fetchAllAuthors);
router.get("/getAuthor/:id", fetchAuthorById);
router.put("/update/:id", updateAuthor);

module.exports = router;
