const express = require("express");
const app = express();
const port = 3000;

//routes

// home page
app.get("/", (req, res) => {
  res.send(`<h1>99 Bottles of beer on the wall</h1>
  <a href='http://localhost:3000/98'>Take one down, pass it around</a>`);
});

// next pages route
app.get("/:bottlenumber", (req, res) => {
  const nextNumber = req.params.bottlenumber - 1;
  if (nextNumber >= 0) {
    res.send(`<h1>${req.params.bottlenumber} bottle(s) of beer on the wall</h1>
  <a href='http://localhost:3000/${nextNumber}'>Take one down, pass it around</a>
  `);
  } else {
    res.send(`<a href=//localhost:3000>Main Page</a>`)
  }
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
