const http = require("http");
const express = require("express");
const app = express();
const stocks = require("./data.js");

app.get("/", (req, res) => {
  console.log(stocks.stocks);
  res.send(stocks.stocks);
});

const server = http.createServer(app);
server.listen(3000);
