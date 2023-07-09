const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/shopApp")
  .then(() => {
    console.log("MONGO CONNCTED");
  })
  .catch(() => {
    console.log("MONGO ERROR");
  });

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/duck", (req, res) => {
  res.send("QUACK !:");
});

app.listen(3000, () => {
  console.log("APP IS LISTENING ON PORT 3000");
});
