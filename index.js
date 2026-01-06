const express = require("express");
const app = express();
const port = 3000;

const indexRouter = require("./routes/index");

// Set EJS as the template engine
app.set("view engine", "ejs");

app.use("/", indexRouter);

// app.get("/", (req, res) => {
//   res.render("index", { title: "Home Page" });
// });

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
