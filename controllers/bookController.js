const Book = require("../models/book");
const Author = require("../models/authorSchema");
exports.createBook = async (req, res) => {
  try {
    const {
      title,
      isbn,
      author,
      status,
      borrowedBy,
      issuedBy,
      returnDate,
      publishedDate,
    } = req.body;

    if (!title || !isbn || !author || !issuedBy) {
      return res.status(400).json({
        message: "Required fields missing",
        status: 400,
      });
    }

    const existingIsbn = await Book.findOne({ isbn });
    if (existingIsbn) {
      return res.status(409).json({
        message: "This book already exists",
        status: 409,
      });
    }

    const existingAuthor = await Author.findOne({ author });
    if (existingAuthor) {
      return res.status(409).json({ message: "Author doesn't exist" });
    }

    const newBook = await Book.create({
      title,
      isbn,
      publishedDate,
      status: status || "IN",
      author,
      issuedBy,
      borrowedBy: borrowedBy || null,
      returnDate: returnDate || null,
    });

    const populatedBook = await Book.findById(newBook._id).populate("author");

    return res.status(201).json({
      message: "New book created successfully!",
      data: populatedBook,
      status: 201,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal Server Error",
      status: 500,
    });
  }
};
exports.fetchAllBooks = async (req, res) => {
  try {
    const books = await Book.find()
      .populate("author")
      .populate("issuedBy")
      .populate("borrowedBy");

    if (books.length === 0) {
      return res.status(404).json({ message: "No books found", status: 404 });
    }

    res.status(200).json({ message: "Fetched all books", data: books });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error", status: 500 });
  }
};
exports.fetchBookById = async (req, res) => {
  try {
    const bookId = req.params.id;

    if (!bookId) {
      return res.status(400).json({
        message: "Author ID is required",
      });
    }

    const book = await Book.findById(bookId).populate("author");

    if (!book) {
      return res.status(404).json({
        message: "Book not found",
      });
    }

    return res.status(200).json({
      message: "Book fetched successfully",
      data: book,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
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
