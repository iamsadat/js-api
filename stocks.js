const axios = require("axios");
require("dotenv").config();

const options = {
  method: "GET",
  url: "https://real-time-finance-data.p.rapidapi.com/market-trends",
  params: {
    trend_type: "GAINERS",
    country: "us",
    language: "en",
  },
  headers: {
    "X-RapidAPI-Key": process.env.STOCKS_API_KEY,
    "X-RapidAPI-Host": "real-time-finance-data.p.rapidapi.com",
  },
};

const getStocks = async () => {
  try {
    const response = await axios.request(options);
    const allStocks = response.data.data.trends;
    const stocks = allStocks.map((stock) => {
      return {
        symbol: stock.symbol,
        company_name: stock.name,
        price: stock.price,
        change: stock.change,
      };
    });

    return stocks;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

module.exports = getStocks;
