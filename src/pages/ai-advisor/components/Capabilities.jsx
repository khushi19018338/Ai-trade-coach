import AnimatedCard from "../../../components/ui/AnimatedCard";
const items = [
  { title: "Market Analysis", desc: "Real-time trend detection", icon: "🧠" },
  { title: "Entry / Exit Signals", desc: "Optimal trade timing", icon: "🎯" },
  { title: "Risk Management", desc: "Portfolio risk insights", icon: "🛡️" },
  { title: "Strategy Builder", desc: "Custom strategies", icon: "📈" },
];

export default function Capabilities() {
  return (
    <AnimatedCard>
    <div className="p-6 rounded-2xl bg-slate-900">
      <h4 className="font-semibold mb-4">What I Can Do</h4>

      <div className="space-y-3">
        {items.map((i) => (
          <div key={i.title} className="p-4 bg-slate-800 rounded-xl">
            <div className="font-semibold flex items-center gap-2">
              {i.icon} {i.title}
            </div>
            <div className="text-sm text-slate-400">{i.desc}</div>
          </div>
        ))}
      </div>
    </div>
    </AnimatedCard>
  );
}
