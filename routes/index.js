const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

const express = require("express");
const router = express.Router();

// Define a route for the root path
router.get("/", (req, res) => {
  res.send("Welcome to the Home Page!");
});

router.get("/new", (req, res) => {
  res.render("form"); // points to views/form.ejs
});

router.post("/new", (req, res) => {
  // Access data sent in the request body
  const data = req.body;

  // Example: Do something with the data (e.g., save to database)
  console.log("Received new data:", data);

  // Send a response back to the client
  res.status(201).json({ message: "New item created successfully", data });
});

module.exports = router;
