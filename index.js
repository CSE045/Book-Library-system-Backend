const express = require("express");
const cors = require("cors");
const bookRouter = require("./Routes/bookRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Custom middleware for logging request time
app.use((req, res, next) => {
  req.requestTimeOfHit = new Date().toLocaleString();
  next();
});

// Routes
app.use("/api/v1/books", bookRouter);

module.exports = app;
