import axios from "axios";

/**
 * Dev:
 *  - baseURL = "" → Vite proxy → Gateway
 *
 * Prod:
 *  - baseURL = VITE_GATEWAY_URL → Public Gateway URL
 */
const API_URL =
  import.meta.env.MODE === "development"
    ? ""
    :"https://gatewayservice-ll9q.onrender.com"; // e.g. https://gateway.onrender.com

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// 🔐 Frontend sends ONLY JWT
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    /**
     * ❌ DO NOT send:
     * - X-User-Id
     * - X-Gateway-Token
     *
     * Gateway will inject both
     */

    return config;
  },
  (error) => Promise.reject(error)
);

// 🔁 Unified request wrapper
export const apiRequest = async (method, url, data = null) => {
  try {
    const response = await api({ method, url, data });
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error(
        `API Error ${method.toUpperCase()} ${url}`,
        error.response.status,
        error.response.data
      );
    } else if (error.request) {
      console.error(`API Error ${method.toUpperCase()} ${url}: No response`);
    } else {
      console.error(
        `API Error ${method.toUpperCase()} ${url}:`,
        error.message
      );
    }
    throw error;
  }
};

// 🚀 Clean API surface
export const API = {
  get: (url) => apiRequest("get", url),
  post: (url, data) => apiRequest("post", url, data),
  put: (url, data) => apiRequest("put", url, data),
  delete: (url) => apiRequest("delete", url),
};

export default API;