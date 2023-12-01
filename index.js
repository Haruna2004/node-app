const express = require("express");

const app = express();

app.get("/", (req, res) => {
  console.log("hello there");
  res.send("hello I'm working just fine!");
});

app.listen("3000", () => console.log("App listening on port 3000"));
