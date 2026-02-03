import axios from "axios";

const API_URL = ""; // Empty string allows Vite Proxy to handle requests

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

// API Wrapper
export const apiRequest = async (method, url, data = null) => {
  try {
    const response = await api({
      method,
      url,
      data,
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error(`API Error ${url}:`, error.response.status, error.response.data);
    } else if (error.request) {
      console.error(`API Error ${url}: No response received`, error.request);
    } else {
      console.error(`API Error ${url}:`, error.message);
    }
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
