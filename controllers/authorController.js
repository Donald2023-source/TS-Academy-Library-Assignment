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

exports.fetchAllAuthors = async (req, res) => {
  try {
    const authors = await Author.find();

    res.status(200).json({
      message: "Fetched all authors",
      data: authors,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server error",
      error: error.message,
    });
  }
};

exports.fetchAuthorById = async (req, res) => {
  try {
    const authorId = req.params.id;

    if (!authorId) {
      return res.status(400).json({
        message: "Author ID is required",
      });
    }

    const author = await Author.findById(authorId);

    if (!author) {
      return res.status(404).json({
        message: "Author not found",
      });
    }

    return res.status(200).json({
      message: "Author fetched successfully",
      data: author,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

exports.updateAuthor = async (req, res) => {
  try {
    const { name, bio } = req.body;
    const authorId = req.params.id;

    if (!authorId || !name || !bio) {
      return res.status(400).json({
        message: "Something is missing",
      });
    }

    const author = await Author.findById(authorId);

    if (!author) {
      return res.status(404).json({
        message: "Author not found",
      });
    }

    author.name = name;
    author.bio = bio;

    await author.save();

    return res.status(200).json({
      message: "Author fetched successfully",
      data: author,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

exports.deleteAuthor = async (req, res) => {
  try {
    const authorId = req.params.id;

    if (!authorId) {
      return res.status(404).json({ message: "ID not found!", status: 404 });
    }

    await Author.findByIdAndDelete(authorId);
    res.status(200).json({ message: "Author Deleted Successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server error", status: 500 });
  }
};
