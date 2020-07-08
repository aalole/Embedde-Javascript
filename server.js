const express = require("express");
const app = express();
const port = 4040;

// set the view engine
app.set("view engine", "ejs");

//rendering our index page with the view engine
app.get("/", (req, res) => {
  let drinks = [
    { name: "Akinade", drunkness: 3 },
    { name: "Martin Gero", drunkness: 5 },
    { name: "Baaqi", drunkness: 6 },
  ];

  const myTag = "He who does evil evil does";

  res.render("pages/index", {
    drinks: drinks,
    myTag: myTag,
  });
});

//rendering our about us page with the view engine
app.get("/about", (req, res) => {
  res.render("pages/about");
});

app.listen(port, () => {
  console.log(`app listening on port: ${port}`);
});
