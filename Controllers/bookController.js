const Book = require("../Models/bookModel");

// Get all books
exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json({
      status: "success",
      results: books.length,
      data: { books }
    });
  } catch (err) {
    res.status(500).json({ status: "fail", message: err.message });
  }
};

// Get single book
exports.getBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ status: "fail", message: "Book not found" });
    res.status(200).json({ status: "success", data: { book } });
  } catch (err) {
    res.status(500).json({ status: "fail", message: err.message });
  }
};

// Create new book
exports.createBook = async (req, res) => {
  try {
    const newBook = await Book.create(req.body);
    res.status(201).json({ status: "success", data: { book: newBook } });
  } catch (err) {
    res.status(400).json({ status: "fail", message: err.message });
  }
};

// Update book
exports.updateBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!book) return res.status(404).json({ status: "fail", message: "Book not found" });
    res.status(200).json({ status: "success", data: { book } });
  } catch (err) {
    res.status(400).json({ status: "fail", message: err.message });
  }
};

// Delete book
exports.deleteBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) return res.status(404).json({ status: "fail", message: "Book not found" });
    res.status(204).json({ status: "success", data: null });
  } catch (err) {
    res.status(500).json({ status: "fail", message: err.message });
  }
};
