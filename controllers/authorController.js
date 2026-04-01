const Author = require("../models/authorSchema");

exports.createAuthor = async (req, res) => {
  try {
    const { name, bio, dob } = req.body;

    if (!name || !bio || !dob) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const author = await Author.create({
      name,
      bio,
      dob,
    });

    return res.status(201).json({
      message: "Author created successfully",
      data: author,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
      error: error.message,
    });
  }
};
