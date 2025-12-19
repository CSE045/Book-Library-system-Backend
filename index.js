const express = require("express");
const cors = require("cors");
const bookRouter = require("./Routes/bookRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
    req.requestTimeOfHit = new Date().toLocaleString();
    next();
});

app.use("/api/v1/books", bookRouter);

module.exports = app;
