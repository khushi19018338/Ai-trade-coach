import MistakeCard from "./MistakeCard";
import AnimatedCard from "../../../components/ui/AnimatedCard";
export default function MistakesSection() {
  return (
    <AnimatedCard>
    <section className="border border-red-500/30 rounded-2xl p-6 bg-slate-950/60">
      
      <h2 className="text-xl font-bold text-white flex items-center gap-2 mb-6">
        📈 Common Mistakes & How to Avoid Them
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <MistakeCard
          title="Overleveraging"
          desc="Using too much leverage can amplify losses exponentially."
        />

        <MistakeCard
          title="No Stop Loss"
          desc="Always set stop losses to protect your trading capital."
        />

        <MistakeCard
          title="FOMO Trading"
          desc="Chasing pumps often leads to buying at the top."
        />
      </div>
    </section>
    </AnimatedCard>
  );
}
