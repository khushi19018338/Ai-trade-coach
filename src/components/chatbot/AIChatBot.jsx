import { useState } from "react";
import API from "../../services/api";

export default function AIChatBot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { from: "ai", text: "Hi! I’m your AI Trade Coach. Ask me anything about your portfolio or the market." },
  ]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    const userId = localStorage.getItem("userId");
    if (!input.trim() || loading) return;

    const userMsg = input;
    setMessages((prev) => [...prev, { from: "user", text: userMsg }]);
    setInput("");
    setLoading(true);

    try {
      // Real API Call
      const res = await API.post("/dashboard/ai/chat", { userId: userId || "user-123", message: userMsg });

      // Handle both "answer" (from mock/spec) or standard message field
      const aiResponse = res?.answer || res?.message || "I've analyzed your request. Please check your portfolio details.";

      setMessages((prev) => [
        ...prev,
        { from: "ai", text: aiResponse },
      ]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        { from: "ai", text: "⚠️ I'm having trouble connecting to the market data right now." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Toggle Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setOpen(true)}
          className="w-14 h-14 rounded-full bg-cyan-500 hover:bg-cyan-400 text-black shadow-[0_0_20px_rgba(34,211,238,0.5)] flex items-center justify-center text-2xl transition hover:scale-110"
        >
          🤖
        </button>
      </div>

      {/* Drawer */}
      <div className={`fixed inset-y-0 right-0 w-[350px] bg-slate-900 border-l border-slate-700 shadow-2xl z-50 transform transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}>
        {/* Header */}
        <div className="p-4 border-b border-slate-700 flex justify-between items-center bg-slate-950">
          <span className="font-bold text-cyan-400 flex items-center gap-2">
            🤖 AI Coach
          </span>
          <button onClick={() => setOpen(false)} className="text-slate-400 hover:text-white">✕</button>
        </div>

        {/* Messages */}
        <div className="flex-1 p-4 overflow-y-auto space-y-4 h-[calc(100vh-140px)] bg-slate-900/50">
          {messages.map((m, i) => (
            <div
              key={i}
              className={`max-w-[85%] px-4 py-2 rounded-xl text-sm leading-relaxed ${m.from === "user"
                ? "ml-auto bg-cyan-600 text-white rounded-tr-none"
                : "bg-slate-800 text-slate-200 rounded-tl-none border border-slate-700"
                }`}
            >
              {m.text}
            </div>
          ))}
          {loading && (
            <div className="bg-slate-800 text-slate-400 px-4 py-2 rounded-xl rounded-tl-none text-xs w-fit animate-pulse">
              Thinking...
            </div>
          )}
        </div>

        {/* Input */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-slate-950 border-t border-slate-700">
          <div className="flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Ask AI..."
              className="flex-1 bg-slate-900 text-white placeholder-slate-500 border border-slate-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-cyan-400"
            />
            <button
              onClick={sendMessage}
              disabled={loading}
              className="bg-cyan-500 hover:bg-cyan-400 text-black px-3 rounded-lg font-medium transition disabled:opacity-50"
            >
              ➤
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
