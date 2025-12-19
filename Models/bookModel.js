const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: true 
  },
  author: { 
    type: String, 
    required: true 
  },
  language: { 
    type: [String], 
    default: [] 
  },
  pages: { 
    type: Number 
  },
  year: { 
    type: Number 
  },
  cover: { 
    type: String 
  },
  category: { 
    type: String, 
    required: true,
    default: "Fiction"
  }
}, { 
  timestamps: true 
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;