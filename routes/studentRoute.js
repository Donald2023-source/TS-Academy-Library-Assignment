const express = require("express");
const {
  createStudent,
  fetchAllStudents,
  fetchStudentById,
} = require("../controllers/studentController");
const router = express.Router();

router.post("/create", createStudent);
router.get("/get-all", fetchAllStudents);
router.get("/get/:id", fetchStudentById);
module.exports = router;
