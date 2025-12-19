const app = require("./index");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");

dotenv.config({ path: "./config.env" });

app.use(cors());

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("DB connected successfully");
  })
  .catch((err) => {
    console.log("DB connection error:", err.message);
  });

app.listen(process.env.PORT_NO, () => {
  console.log("Server is running on port", process.env.PORT_NO);
});
