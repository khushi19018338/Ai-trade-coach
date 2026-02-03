import axios from "axios";

const API_URL = "https://gatewayservice-ll9q.onrender.com";
const MOCK_MODE = false; // Set to false to use real API

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor to add auth token and User ID
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  // Watchlist service requires X-User-Id header explicitly
  if (userId) {
    config.headers["X-User-Id"] = userId;
  }

  return config;
});

// Mock Data
const MOCK_DATA = {
  "/dashboard/summary": {
    totalValue: 124500.50,
    dailyPnL: 3200.75,
    dailyPnLPercent: 2.6,
    overallReturn: 15.4,
    marketStatus: "OPEN",
    activeTrades: 4,
  },
  "/dashboard/trades": [
    { id: 1, symbol: "TCS", side: "BUY", qty: 10, entry: 3400, current: 3450, pnl: 500, type: "EQUITY", strategy: "Swing", confidence: 85, duration: "2 Days" },
    { id: 2, symbol: "INFY", side: "SELL", qty: 25, entry: 1500, current: 1480, pnl: 500, type: "EQUITY", strategy: "Intraday", confidence: 60, duration: "4 Hrs" },
    { id: 3, symbol: "NIFTY", side: "BUY", qty: 50, entry: 19500, current: 19600, pnl: 5000, type: "F&O", strategy: "Options", confidence: 90, duration: "1 Day" },
    { id: 4, symbol: "RELIANCE", side: "BUY", qty: 5, entry: 2500, current: 2480, pnl: -100, type: "EQUITY", strategy: "Long Term", confidence: 75, duration: "5 Days" },
  ],
  "/dashboard/portfolio": [
    { id: 101, symbol: "HDFCBANK", qty: 50, avgPrice: 1500, invested: 75000, current: 76500, pnl: 1500, change: 2.0 },
    { id: 102, symbol: "SBIN", qty: 100, avgPrice: 600, invested: 60000, current: 62000, pnl: 2000, change: 3.3 },
  ],
  "/dashboard/ai/explain-trade": {
    reasoning: "Strong bullish momentum detected on 15m timeframe. RSI croosed 60 coupled with volume spike.",
    strategy: "Momentum Breakout",
    risk: "Medium. Stop loss at swing low 3380.",
    whatIfWrong: "If price closes below 3380, the trend structure is invalidated.",
  },
  "/dashboard/ai/review": {
    concentration: "High exposure to IT sector (60%). Consider diversifying.",
    risk: "Portfolio beta is 1.2, slightly higher than market.",
    behavior: "You tend to exit winning trades too early (Avg holding: 2 days).",
  },
  "/dashboard/ai/suggest/stocks": [
    { symbol: "HDFCBANK", action: "BUY", reason: "Support bounce at 1500", confidence: 85 },
    { symbol: "TATAMOTORS", action: "WATCH", reason: "Approaching resistance", confidence: 60 },
  ],
  "/dashboard/ai/suggest/funds": [
    { name: "Parag Parikh Flexi Cap", type: "Equity", reason: "Consistent long-term compounder" },
  ],
  "/dashboard/ai/savings": {
    message: "You have ₹20,000 idle in your account. Consider a liquid fund for 6% returns.",
  },
  "/auth/login": {
    token: "mock-jwt-token-xyz",
    userId: "user-123",
    name: "Demo User",
  },
  "/api/watchlist": [
    { symbol: "TCS", price: 3450, change: 1.2 },
    { symbol: "INFY", price: 1480, change: -0.5 },
  ]
};

// Helper logging
const logMock = (url, method, data) => {
  console.log(`[MOCK API] ${method.toUpperCase()} ${url}`, data || "");
};

// API Wrapper
export const apiRequest = async (method, url, data = null) => {
  if (MOCK_MODE) {
    await new Promise((resolve) => setTimeout(resolve, 600)); // Simulate latency

    // Simple mock routing logic
    if (url.includes("/auth/login") || url.includes("/auth/signup")) {
      logMock(url, method, MOCK_DATA["/auth/login"]);
      return MOCK_DATA["/auth/login"];
    }

    // Handle parametrized URLs via simple includes for now
    if (url.includes("/dashboard/summary")) return MOCK_DATA["/dashboard/summary"];
    if (url.includes("/dashboard/trades")) return MOCK_DATA["/dashboard/trades"];
    if (url.includes("/dashboard/data/portfolio")) return MOCK_DATA["/dashboard/portfolio"];
    if (url.includes("/data/portfolio")) {
      console.log("[MOCK] Adding to Portfolio:", data);
      return { success: true, message: "Holding added" };
    }
    if (url.includes("/data/trade")) {
      console.log("[MOCK] Logging Trade:", data);
      return { success: true, message: "Trade logged" };
    }
    if (url.includes("/explain-trade")) return MOCK_DATA["/dashboard/ai/explain-trade"];
    if (url.includes("/dashboard/ai/review")) return MOCK_DATA["/dashboard/ai/review"];
    if (url.includes("/suggest/stocks")) return MOCK_DATA["/dashboard/ai/suggest/stocks"];
    if (url.includes("/suggest/funds")) return MOCK_DATA["/dashboard/ai/suggest/funds"];
    if (url.includes("/savings")) return MOCK_DATA["/dashboard/ai/savings"];
    if (url.includes("/watchlist")) return MOCK_DATA["/api/watchlist"];
    if (url.includes("/suggest/funds")) return MOCK_DATA["/dashboard/ai/suggest/funds"];
    if (url.includes("/savings")) return MOCK_DATA["/dashboard/ai/savings"];
    if (url.includes("/watchlist")) return MOCK_DATA["/api/watchlist"];

    logMock(url, method, "No specific mock data found, returning generic success");
    return { success: true };
  }

  try {
    const response = await api({
      method,
      url,
      data,
    });
    return response.data;
  } catch (error) {
    console.error(`API Error ${url}:`, error);
    // Return null or throw depending on how components handle it. 
    // For now, re-throwing allows components to see the error.
    throw error;
  }
};

export const API = {
  get: (url) => apiRequest("get", url),
  post: (url, data) => apiRequest("post", url, data),
  put: (url, data) => apiRequest("put", url, data),
  delete: (url) => apiRequest("delete", url),
};

export default API;
