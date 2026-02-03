export const TRADABLES = {
  RELIANCE: {
    symbol: "RELIANCE",
    name: "Reliance Industries",
    type: "stock",
    exchange: "NSE",
    price: 2450.00,
  },

  TCS: {
    symbol: "TCS",
    name: "Tata Consultancy Svcs",
    type: "stock",
    exchange: "NSE",
    price: 3400.50,
  },

  HDFCBANK: {
    symbol: "HDFCBANK",
    name: "HDFC Bank",
    type: "stock",
    exchange: "NSE",
    price: 1530.00,
  },

  NIFTY: {
    symbol: "NIFTY",
    name: "Nifty 50 Index",
    type: "index",
    exchange: "NSE",
    price: 19500.00,
  },

  BTC: {
    symbol: "BTC",
    name: "Bitcoin",
    type: "crypto",
    exchange: "BINANCE",
    price: 67234.5,
  },
};

export const candleMap = {
  RELIANCE: [
    { time: "2024-01-01", open: 2400, high: 2460, low: 2390, close: 2450 },
    { time: "2024-01-02", open: 2450, high: 2480, low: 2440, close: 2465 },
    { time: "2024-01-03", open: 2465, high: 2470, low: 2420, close: 2430 },
    { time: "2024-01-04", open: 2430, high: 2490, low: 2430, close: 2480 },
    { time: "2024-01-05", open: 2480, high: 2500, low: 2470, close: 2495 },
  ],

  TCS: [
    { time: "2024-01-01", open: 3300, high: 3350, low: 3280, close: 3340 },
    { time: "2024-01-02", open: 3340, high: 3380, low: 3320, close: 3360 },
    { time: "2024-01-03", open: 3360, high: 3400, low: 3350, close: 3390 },
    { time: "2024-01-04", open: 3390, high: 3420, low: 3380, close: 3410 },
  ],

  HDFCBANK: [
    { time: "2024-01-01", open: 1500, high: 1540, low: 1490, close: 1530 },
    { time: "2024-01-02", open: 1530, high: 1550, low: 1510, close: 1520 },
    { time: "2024-01-03", open: 1520, high: 1560, low: 1500, close: 1550 },
  ],

  NIFTY: [
    { time: "2024-01-01", open: 19400, high: 19600, low: 19350, close: 19500 },
    { time: "2024-01-02", open: 19500, high: 19700, low: 19450, close: 19650 },
    { time: "2024-01-03", open: 19650, high: 19750, low: 19550, close: 19600 },
  ]
};
