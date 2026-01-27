import { useState } from "react";
import AnimatedCard from "../../../components/ui/AnimatedCard";
export default function AICoachChat({ lesson }) {
  const [messages, setMessages] = useState([
    {
      role: "ai",
      text: `Hi 👋 I’m your AI Coach. Ask me anything about ${lesson}.`,
    },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    setMessages((prev) => [
      ...prev,
      { role: "user", text: input },
      {
        role: "ai",
        text:
          "Great question! Think of this concept as market psychology. Focus on confirmation, not prediction.",
      },
    ]);

    setInput("");
  };

  return (
    <AnimatedCard>
    <div className="bg-slate-900 rounded-xl p-5 border border-slate-800">
      <h3 className="font-semibold mb-3">
        🤖 AI Coach — {lesson}
      </h3>

      {/* CHAT WINDOW */}
      <div className="h-40 overflow-y-auto space-y-2 text-sm mb-3">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`p-2 rounded ${
              m.role === "ai"
                ? "bg-slate-800 text-cyan-400"
                : "bg-cyan-600 text-black self-end"
            }`}
          >
            {m.text}
          </div>
        ))}
      </div>

      {/* INPUT */}
      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Ask about ${lesson}...`}
          className="flex-1 bg-slate-800 rounded px-3 py-2 text-sm outline-none"
        />
        <button
          onClick={sendMessage}
          className="bg-cyan-500 text-black px-4 rounded font-semibold"
        >
          Send
        </button>
      </div>
    </div>
    </AnimatedCard>
  );
}
