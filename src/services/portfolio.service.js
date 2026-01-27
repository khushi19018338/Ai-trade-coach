import { apiRequest } from "./api";

export function fetchPortfolio() {
  return apiRequest("/portfolio");
}

export function rebalancePortfolio() {
  return apiRequest("/portfolio/rebalance", {
    method: "POST",
  });
}
