const Student = require("../models/student");
exports.createStudent = async (req, res) => {
  try {
    const { name, email, studentId } = req.body;

    if (!name || !email || !studentId) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const newStudent = await Student.create({
      name,
      email,
      studentId: `LB/${studentId}`,
    });

    return res.status(201).json({
      message: "Student created successfully",
      data: newStudent,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
      error: error.message,
    });
  }
};
exports.fetchAllStudents = async (req, res) => {
  try {
    const students = await Student.find();

    res.status(200).json({
      message: "Fetched all students",
      data: students,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server error",
      error: error.message,
    });
  }
};
exports.fetchStudentById = async (req, res) => {
  try {
    const studentId = req.params.id;

    if (!studentId) {
      return res.status(400).json({
        message: "Student ID is required",
      });
    }

    const author = await Student.findById(studentId);

    if (!studentId) {
      return res.status(404).json({
        message: "Student not found",
      });
    }

    return res.status(200).json({
      message: "Student fetched successfully",
      data: author,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
