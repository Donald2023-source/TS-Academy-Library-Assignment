const express = require("express");
const {
  createStudent,
  fetchAllStudents,
} = require("../controllers/studentController");
const router = express.Router();

router.post("/create", createStudent);
router.get("/get-all", fetchAllStudents);
module.exports = router;
