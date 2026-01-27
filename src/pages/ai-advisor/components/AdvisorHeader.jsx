import AnimatedCard from "../../../components/ui/AnimatedCard";

export default function AdvisorHeader() {
  return (
    <AnimatedCard>
      <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 border border-cyan-400/40">
        
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-xl bg-cyan-400 text-black flex items-center justify-center font-bold">
            ✨
          </div>

          <div>
            <h2 className="text-2xl font-bold">AI Trading Coach</h2>
            <p className="text-slate-400 text-sm">
              Your personal AI assistant for trading decisions
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Stat label="24/7" desc="Always Available" />
          <Stat label="87%" desc="Avg Confidence" color="text-green-400" />
          <Stat label="1.2s" desc="Response Time" color="text-yellow-400" />
          <Stat label="500+" desc="Assets Covered" />
        </div>

      </div>
    </AnimatedCard>
  );
}

function Stat({ label, desc, color = "text-cyan-400" }) {
  return (
    <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-400/40 transition">
      <div className={`text-xl font-bold ${color}`}>{label}</div>
      <div className="text-sm text-slate-400">{desc}</div>
    </div>
  );
}
