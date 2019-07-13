const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");
const app = express();

app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.send("Hello!");
});


app.listen(9392, process.env.IP);
