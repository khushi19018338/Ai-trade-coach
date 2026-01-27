import { apiRequest } from "./api";

export function fetchTrades() {
  return apiRequest("/trades");
}

export function fetchSignals() {
  return apiRequest("/signals");
}
