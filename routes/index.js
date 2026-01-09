const userMessages = [
  {
    text: "Hi there!",
    user: "LunarWhisper534",
    added: new Date(),
  },
  {
    text: "Hello Everybody!",
    user: "ObsidianFox3145",
    added: new Date(),
  },
];

const express = require("express");
const router = express.Router();

// Define a route for the root path

router.get("/", function (req, res, next) {
  res.render("index", {
    title: "Mini Messageboard",
    messages: userMessages,
  });
});

// POST new message
router.post("/", function (req, res) {
  const messageUser = req.body.messageUser;
  const messageText = req.body.messageText;

  userMessages.push({
    text: messageText,
    user: messageUser,
    added: new Date(),
  });

  res.redirect("/");
});

module.exports = router;
