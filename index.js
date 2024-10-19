// Load environment variables from a file
process.loadEnvFile();

// Retrieve sensitive information from environment variables
const userName = process.env.USER;
const password = process.env.PASSWORD;

// Import required modules
const express = require("express");
const app = express();
const mongoose = require("mongoose");

// Define a route for the root path
app.get("/", (req, res) => {
  res.send("Hello from node");
});

// Define a route for the products path
app.post("/api/products", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

// Connect to MongoDB using mongoose
mongoose
  .connect(
    `mongodb+srv://${userName}:${password}@backenddb.rd500.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB`
  )
  .then(() => {
    console.log("Connected to MongoDB");
    // Start the server and listen on port 3000
    app.listen(3000, () => {
      console.log("Server running on port 3000");
    });
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB", err);
  });
