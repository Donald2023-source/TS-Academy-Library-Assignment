const Book = require("../modelsbook/");

exports.borrowBook = async (req, res) => {
  try {
    const { studentId, attendantId, returnDate } = req.body;

    const bookId = req.params.id;
    const book = await Book.findBy(bookId);

    if (!book) {
      return res.status(400).json({ message: "book not found" });
    }

    if (book.status === "OUT") {
      return res.status(400).json({ message: "book is already out" });
    }

    book.status = "OUT";
    book.borrowedBy = studentId;
    book.issuedBy = attendantId;
    book.returnDate = returnDate;

    await book.save();
  } catch (err) {
    res.status(200).json({ error: err });
  }
};
