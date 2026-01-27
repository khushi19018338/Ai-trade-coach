export const TRADABLES = {
  AAPL: {
    symbol: "AAPL",
    name: "Apple Inc.",
    type: "stock",
    exchange: "NASDAQ",
    price: 178.32,
  },

  GOOG: {
    symbol: "GOOG",
    name: "Google",
    type: "stock",
    exchange: "NASDAQ",
    price: 142.87,
  },

  BTC: {
    symbol: "BTC",
    name: "Bitcoin",
    type: "crypto",
    exchange: "BINANCE",
    price: 67234.5,
  },

  ETH: {
    symbol: "ETH",
    name: "Ethereum",
    type: "crypto",
    exchange: "BINANCE",
    price: 3542.18,
  },
};
export const candleMap = {
  AAPL: [
    { time: "2024-01-01", open: 170, high: 175, low: 168, close: 172 },
    { time: "2024-01-02", open: 172, high: 178, low: 171, close: 176 },
    { time: "2024-01-03", open: 176, high: 177, low: 169, close: 170 },
    { time: "2024-01-04", open: 170, high: 180, low: 169, close: 178 },
    { time: "2024-01-05", open: 178, high: 179, low: 173, close: 174 },
  ],

  BTC: [
    { time: "2024-01-01", open: 42000, high: 43500, low: 41500, close: 43000 },
    { time: "2024-01-02", open: 43000, high: 44000, low: 42500, close: 43800 },
    { time: "2024-01-03", open: 43800, high: 44500, low: 43000, close: 43200 },
    { time: "2024-01-04", open: 43200, high: 45500, low: 43000, close: 45000 },
  ],

  ETH: [
    { time: "2024-01-01", open: 2200, high: 2300, low: 2150, close: 2250 },
    { time: "2024-01-02", open: 2250, high: 2350, low: 2200, close: 2320 },
    { time: "2024-01-03", open: 2320, high: 2380, low: 2280, close: 2300 },
  ],

  GOOG: [
    { time: "2024-01-01", open: 140, high: 145, low: 138, close: 143 },
    { time: "2024-01-02", open: 143, high: 148, low: 142, close: 147 },
    { time: "2024-01-03", open: 147, high: 149, low: 144, close: 145 },
  ],
};
