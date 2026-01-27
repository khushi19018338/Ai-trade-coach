import AnimatedCard from "../../../components/ui/AnimatedCard";
export default function AISuggestions() {
  return (
    <AnimatedCard>
    <div className="rounded-2xl border border-cyan-400 bg-gradient-to-br from-slate-900 to-slate-800 p-6">
      <h3 className="font-semibold mb-4">AI Portfolio Suggestions</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <p className="text-green-400 font-semibold">Rebalance</p>
          <p className="text-slate-400 text-sm">
            Tech allocation 58% → Target 50%
          </p>
        </div>

        <div>
          <p className="text-yellow-400 font-semibold">Risk Alert</p>
          <p className="text-slate-400 text-sm">
            TSLA exceeds 10% portfolio exposure
          </p>
        </div>

        <div>
          <p className="text-cyan-400 font-semibold">Opportunity</p>
          <p className="text-slate-400 text-sm">
            Strong support detected for MSFT
          </p>
        </div>
      </div>
    </div>
    </AnimatedCard>
  );
}
