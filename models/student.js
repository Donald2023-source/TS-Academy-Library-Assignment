import mongoose, { Schema } from "mongoose";

const studentSchema = new Schema()(
  {
    name: { type: String, requred: true },
    email: { type: String, unique: true },
    studentId: { type: String, unique: true },
    createdAt: Date.now(),
  },
  { timestamps: true },
);

const Student = mongoose.model("Student", studentSchema);

export default Student;
