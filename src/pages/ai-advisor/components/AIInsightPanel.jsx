import AnimatedCard from "../../../components/ui/AnimatedCard";
export default function AIInsightPanel() {
  return (
    <AnimatedCard>
    <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
      <h4 className="font-semibold text-lg flex items-center gap-2">
        🧠 AI Market Insight
      </h4>

      <div className="grid grid-cols-2 gap-4 text-sm">
        <div className="bg-slate-800 rounded-lg p-4">
          <p className="text-slate-400">Market Bias</p>
          <p className="text-green-400 font-semibold">Bullish</p>
        </div>

        <div className="bg-slate-800 rounded-lg p-4">
          <p className="text-slate-400">Risk Level</p>
          <p className="text-yellow-400 font-semibold">Moderate</p>
        </div>

        <div className="bg-slate-800 rounded-lg p-4 col-span-2">
          <p className="text-slate-400">Focus Asset</p>
          <p className="text-cyan-400 font-semibold">AAPL — Tech Momentum</p>
        </div>

        <div className="bg-slate-800 rounded-lg p-4 col-span-2">
          <p className="text-slate-400 mb-1">AI Reasoning</p>
          <p className="text-slate-300 leading-relaxed">
            RSI recovering from oversold levels with increasing volume.
            EMA crossover suggests short-term upside potential.
          </p>
        </div>
      </div>
    </div>
    </AnimatedCard>
  );
}
