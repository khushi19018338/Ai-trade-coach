import AnimatedCard from "../../../components/ui/AnimatedCard";
export default function PortfolioAccess() {
  return (
    <AnimatedCard>
    <div className="p-6 rounded-2xl bg-slate-900 border border-cyan-400/40">
      <h4 className="font-semibold mb-2">Portfolio Access</h4>
      <p className="text-sm text-slate-400 mb-4">
        AI can analyze your current positions and give personalized advice.
      </p>

      <button className="w-full bg-cyan-400 text-black py-3 rounded-lg font-semibold">
        Grant Access
      </button>
    </div>
    </AnimatedCard>
  );
}
