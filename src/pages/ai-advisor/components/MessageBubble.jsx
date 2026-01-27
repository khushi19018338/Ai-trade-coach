import AnimatedCard from "../../../components/ui/AnimatedCard";
export default function MessageBubble({ sender, children }) {
  const isAI = sender === "ai";

  return (
    <AnimatedCard>
    <div
      className={`max-w-xl px-4 py-3 rounded-xl text-sm ${
        isAI
          ? "bg-slate-800 text-slate-200"
          : "bg-cyan-400 text-black ml-auto"
      }`}
    >
      {children}
    </div>
    </AnimatedCard>
  );
}
