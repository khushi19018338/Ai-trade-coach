import axios from "axios";

const API_KEY = "YOUR_FINNHUB_API_KEY";

export const getLiveQuote = async (symbol) => {
  const res = await axios.get(
    "https://finnhub.io/api/v1/quote",
    {
      params: {
        symbol,
        token: API_KEY,
      },
    }
  );

  return res.data;
};
