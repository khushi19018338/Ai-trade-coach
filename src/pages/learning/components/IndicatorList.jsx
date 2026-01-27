import AnimatedCard from "../../../components/ui/AnimatedCard";
export default function IndicatorList() {
  return (
    <AnimatedCard>
    <div className="bg-[#0b1220] rounded-xl p-6 border border-white/5">
      <h2 className="font-semibold text-lg mb-4">Indicator Deep Dive</h2>

      {["RSI", "MACD", "Bollinger Bands"].map((ind) => (
        <div
          key={ind}
          className="bg-[#101c30] p-4 rounded-lg mb-3 flex justify-between"
        >
          <span>{ind}</span>
          <span className="text-cyan-400">Learn →</span>
        </div>
      ))}
    </div>
    </AnimatedCard>
  );
}
