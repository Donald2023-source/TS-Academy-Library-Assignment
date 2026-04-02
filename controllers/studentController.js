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
