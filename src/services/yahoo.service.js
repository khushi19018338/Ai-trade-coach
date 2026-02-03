import axios from "axios";

// Using a public CORS proxy to bypass browser restrictions
// valid proxies: corsproxy.io, cors-anywhere.herokuapp.com (needs activation), etc
const PROXY_URL = "https://corsproxy.io/?";
const BASE_URL = "https://query1.finance.yahoo.com/v8/finance/chart/";

export const YahooService = {
    /**
     * Fetches OHLC data for a given symbol from Yahoo Finance
     * @param {string} symbol - Stock symbol (e.g., "TCS.NS", "AAPL")
     * @param {string} interval - Timeframe (e.g., "1d", "15m")
     * @returns {Promise<Array>} - Array of OHLC objects for Lightweight Charts
     */
    getOHLC: async (symbol = "TCS.NS", interval = "1d") => {
        try {
            const url = `${PROXY_URL}${encodeURIComponent(
                `${BASE_URL}${symbol}?interval=${interval}&range=3mo`
            )}`;

            const response = await axios.get(url);
            const result = response.data.chart.result[0];

            if (!result) throw new Error("No data found");

            const { timestamp, indicators } = result;
            const quote = indicators.quote[0];

            // Yahoo sometimes returns nulls for some candles, filter them out
            const data = timestamp.map((time, index) => ({
                time: time, // Lightweight charts accepts unix timestamp (seconds)
                open: quote.open[index],
                high: quote.high[index],
                low: quote.low[index],
                close: quote.close[index],
            })).filter(candle => candle.open !== null && candle.close !== null);

            return data;
        } catch (error) {
            console.error("Yahoo Finance API Error:", error);
            throw error;
        }
    }
};
