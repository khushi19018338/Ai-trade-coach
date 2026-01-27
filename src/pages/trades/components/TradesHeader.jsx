import AnimatedCard from "../../../components/ui/AnimatedCard";

export default function TradesHeader() {
  return (
    <AnimatedCard>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Stat title="Total Trades" value="124" />
        <Stat title="Win Rate" value="72%" color="text-green-400" />
        <Stat title="Net P&L" value="+$8,420" color="text-green-400" />
        <Stat title="Avg R:R" value="1 : 2.4" />
      </div>
    </AnimatedCard>
  );
}

function Stat({ title, value, color = "text-cyan-400" }) {
  return (
    <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-400/40 transition">
      <p className="text-sm text-slate-400">{title}</p>
      <p className={`text-2xl font-bold ${color}`}>{value}</p>
    </div>
  );
}
