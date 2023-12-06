const http = require("http");
const express = require("express");
const app = express();
const stocks = require("./data.js");

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/stocks", (req, res) => {
  res.send(stocks.stocks);
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});
