const express = require("express");
const app = express();
const port = 4040;

// set the view engine
app.set("view engine", "ejs");

//rendering our index page with the view engine
app.get("/", (req, res) => {
  res.render("pages/index");
});

//rendering our about us page with the view engine
app.get("/", (req, res) => {
  res.render("pages/about");
});

app.listen(port, () => {
  console.log(`app listening on port: ${port}`);
});
