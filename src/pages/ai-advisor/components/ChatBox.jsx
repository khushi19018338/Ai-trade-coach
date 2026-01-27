import MessageBubble from "./MessageBubble";
import AnimatedCard from "../../../components/ui/AnimatedCard";
export default function ChatBox() {
  return (
    <AnimatedCard>
    <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
      <h3 className="text-lg font-semibold mb-4">
        Ask Your AI Trading Coach
      </h3>

      <div className="space-y-4 mb-4">
        <MessageBubble sender="ai">
          Hello! I'm your AI Trading Coach. How can I help you today?
        </MessageBubble>

        <MessageBubble sender="user">
          What should I trade today?
        </MessageBubble>

        <MessageBubble sender="ai">
          Based on current market analysis, AAPL is showing strong bullish
          momentum with 87% confidence. Want entry & stop-loss levels?
        </MessageBubble>
      </div>

      <div className="flex gap-3">
        <input
          className="flex-1 bg-slate-800 rounded-lg px-4 py-3 outline-none"
          placeholder="Ask me anything about trading..."
        />
        <button className="bg-cyan-400 text-black px-4 rounded-lg">
          ➤
        </button>
      </div>
    </div>
    </AnimatedCard>
  );
}
