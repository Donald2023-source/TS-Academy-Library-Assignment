const Attendant = require("../models/attendant");
exports.createAttendant = async (req, res) => {
  try {
    const { name, staffId } = req.body;

    if (!name || !staffId) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const attendant = await Attendant.create({
      name,
      staffId,
    });

    return res.status(201).json({
      message: "Attendant created successfully",
      data: attendant,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
      error: error.message,
    });
  }
};
exports.getAllAttendants = async (req, res) => {
  try {
    const attendants = await Attendant.find();

    res.status(200).json({
      message: "Fetched all Attendants",
      data: attendants,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server error",
      error: error.message,
    });
  }
};
