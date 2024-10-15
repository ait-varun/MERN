// Load environment variables from a file
process.loadEnvFile();

// Retrieve sensitive information from environment variables
const userName = process.env.USER;
const password = process.env.PASSWORD;

// Import required modules
const express = require("express");
const app = express();
const mongoose = require("mongoose");

// Start the server and listen on port 3000
app.listen(3000, () => {
  console.log("Server running on port 3000");
});

// Define a route for the root path
app.get("/", (req, res) => {
  res.send("Hello from node");
});

// Connect to MongoDB using mongoose
mongoose
  .connect(
    `mongodb+srv://${userName}:${password}@backenddb.rd500.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB`
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB", err);
  });
