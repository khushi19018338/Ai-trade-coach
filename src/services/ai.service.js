import { apiRequest } from "./api";

export function askAI(question) {
  return apiRequest("/ai/chat", {
    method: "POST",
    body: JSON.stringify({ question }),
  });
}

export function getAISuggestions() {
  return apiRequest("/ai/suggestions");
}
