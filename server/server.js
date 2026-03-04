require("dotenv").config();
const express = require("express");
const cors = require("cors");

const db = require("./config/db");

const app = express();
app.use(cors());
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// Test DB connection
db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
    return;
  }
  console.log("Connected to MySQL Database");
});

// Routes
const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
