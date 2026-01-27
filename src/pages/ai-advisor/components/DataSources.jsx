import AnimatedCard from "../../../components/ui/AnimatedCard";
const sources = [
  { name: "Price Data", active: true },
  { name: "News Feed", active: true },
  { name: "Social Sentiment", active: true },
  { name: "On-Chain Data", active: false },
];

export default function DataSources() {
  return (
    <AnimatedCard>
    <div className="p-6 rounded-2xl bg-slate-900">
      <h4 className="font-semibold mb-4">Data Sources</h4>

      <div className="space-y-2">
        {sources.map((s) => (
          <div
            key={s.name}
            className="flex justify-between bg-slate-800 px-4 py-2 rounded-lg"
          >
            <span>{s.name}</span>
            <span className={s.active ? "text-green-400" : "text-slate-500"}>
              ●
            </span>
          </div>
        ))}
      </div>
    </div>
    </AnimatedCard>
  );
}
