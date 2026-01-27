import { useState } from "react";
import { askAI } from "../../services/ai.service";

export default function AIChatBot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { from: "ai", text: "Hi! I’m your AI Trade Coach." },
  ]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    setMessages((prev) => [...prev, { from: "user", text: input }]);
    setInput("");

    try {
      const res = await askAI(input);
      setMessages((prev) => [
        ...prev,
        { from: "ai", text: res?.answer || "Analyzing market conditions..." },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { from: "ai", text: "⚠️ Something went wrong." },
      ]);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 pointer-events-none z-50">
      {open && (
        <div className="pointer-events-auto w-80 h-96 mb-3 rounded-2xl bg-slate-900 border border-slate-700 shadow-2xl flex flex-col">
          
          {/* Header */}
          <div className="p-4 border-b border-slate-700 font-semibold text-cyan-400">
            🤖 AI Trade Coach
          </div>

          {/* Messages */}
          <div className="flex-1 p-3 overflow-y-auto space-y-2 text-sm">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`max-w-[85%] px-3 py-2 rounded-xl ${
                  m.from === "user"
                    ? "ml-auto bg-cyan-600 text-black"
                    : "bg-slate-800 text-slate-200"
                }`}
              >
                {m.text}
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-3 border-t border-slate-700 flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about trades, RSI, risk..."
              className="flex-1 bg-slate-800 text-white placeholder-slate-400 border border-slate-700 rounded-lg px-3 py-2 focus:outline-none focus:border-cyan-400"
            />
            <button
              onClick={sendMessage}
              className="bg-cyan-500 hover:bg-cyan-400 text-black px-4 rounded-lg font-medium transition"
            >
              Send
            </button>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="pointer-events-auto w-14 h-14 rounded-full bg-cyan-500 hover:bg-cyan-400 text-black shadow-xl text-xl transition"
      >
        🤖
      </button>
    </div>
  );
}
