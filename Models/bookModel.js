const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  language: { type: [String], default: [] },
  pages: { type: Number },
  year: { type: Number },
  cover: { type: String },
  category: { type: String, default: "Fiction" }
}, { timestamps: true });

// Explicit collection name
const Book = mongoose.model("Book", bookSchema, "books");

module.exports = Book;
