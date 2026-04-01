const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema()(
  {
    name: { type: String, requred: true },
    email: { type: String, unique: true },
    studentId: { type: String, unique: true },
  },
  { timestamps: true },
);

const Student = mongoose.model("Student", studentSchema);

export default Student;
