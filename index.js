const express = require("express");
const app = express();
const getStocks = require("./stocks.js");

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/stocks", async (req, res) => {
  try {
    const stocksData = await getStocks();
    res.json(stocksData);
  } catch (error) {
    res.status(500).json({ error: "Error fetching stocks data" });
  }
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});
