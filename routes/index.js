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

router.get("/", function (req, res, next) {
  res.render("index", {
    title: "Mini Messageboard",
    messages: messages,
  });
});

router.get("/new", (req, res) => {
  res.render("form"); // points to views/form.ejs
});

// POST new message
router.post("/new", function (req, res) {
  console.log(req.body);
  const messageUser = req.body.messageUser;
  const messageText = req.body.messageText;

  messages.push({
    text: messageText,
    user: messageUser,
    added: new Date(),
  });

  res.redirect("/");
});

module.exports = router;
