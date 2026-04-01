const express = require("express");
const {
  createAuthor,
  fetchAllAuthors,
  fetchAuthorById,
  updateAuthor,
  deleteAuthor,
} = require("../controllers/authorController");

const router = express.Router();

router.post("/create", createAuthor);
router.get("/fetch-all", fetchAllAuthors);
router.get("/getAuthor/:id", fetchAuthorById);
router.put("/update/:id", updateAuthor);
router.delete("/delete/:id", deleteAuthor);

module.exports = router;
