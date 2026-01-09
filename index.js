const express = require("express");
const app = express();
const port = 3000;

const indexRouter = require("./routes/index");
app.use(express.urlencoded({ extended: true }));

// Set EJS as the template engine
app.set("view engine", "ejs");

app.use("/", indexRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
