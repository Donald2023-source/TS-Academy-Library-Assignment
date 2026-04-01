const Book = require("../models/book");

exports.borrowBook = async (req, res) => {
  try {
    const { studentId, attendantId, returnDate } = req.body;
    const bookId = req.params.id;

    if (!studentId || !attendantId || !returnDate) {
      return res.status(400).json({
        success: false,
        message: "studentId, attendantId, and returnDate are required",
      });
    }

    const book = await Book.findById(bookId);

    if (!book) {
      return res.status(404).json({
        success: false,
        message: "Book not found",
      });
    }

    if (book.status === "OUT") {
      return res.status(400).json({
        success: false,
        message: "Book is already borrowed ",
      });
    }

    book.status = "OUT";
    book.borrowedBy = studentId;
    book.issuedBy = attendantId;
    book.returnDate = new Date(returnDate);

    await book.save();

    const populatedBook = await Book.findById(book._id)
      .populate("borrowedBy", "name studentId email")
      .populate("issuedBy", "name");

    res.status(200).json({
      success: true,
      message: "Book borrowed successfully",
      book: populatedBook,
    });
  } catch (err) {
    console.error("Borrow Book Error:", err);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: err.message,
    });
  }
};

exports.returnBook = async (req, res) => {
  try {
    const bookId = req.params.id;

    const book = await Book.findById(bookId);
    if (!book) {
      res.status(404).json({ message: "Book not found", status: 404 });
    }

    if (book.status === "IN") {
      return res
        .status(400)
        .json({ message: "This book is not out!", status: 400 });
    }

    if (book.returnDate < Date.now()) {
      res.status(201).json({
        message: "You need to pay a find of N1000 for returning this book late",
      });
    }
    book.status = "IN";
    book.borrowedBy = studentId;
    book.issuedBy = attendantId;
    book.returnDate = null;

    await book.save();
    const populatedBook = await Book.findById(book._id)
      .populate("borrowedBy", "name studentId email")
      .populate("issuedBy", "name");

    res.status(200).json({
      success: true,
      message: "Book borrowed successfully",
      book: populatedBook,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal Server error" });
  }
};
