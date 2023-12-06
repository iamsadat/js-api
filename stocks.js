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

try {
  const response = await axios.request(options);
  console.log(response.data);
} catch (error) {
  console.error(error);
}
