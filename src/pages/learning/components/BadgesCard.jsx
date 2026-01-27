import { getProgress } from "../../../services/learning.service";
import AnimatedCard from "../../../components/ui/AnimatedCard";
export default function BadgesCard() {
  const { badges } = getProgress();

  if (!badges.length) return null;

  return (
    <AnimatedCard>
    <div className="bg-slate-900 rounded-xl p-5 border border-slate-800">
      <h3 className="font-semibold mb-3">🏅 Achievements</h3>

      <div className="flex flex-wrap gap-3">
        {badges.map((badge) => (
          <span
            key={badge}
            className="px-4 py-2 rounded-full text-sm font-semibold
              bg-gradient-to-r from-cyan-400 to-green-400 text-black"
          >
            {badge}
          </span>
        ))}
      </div>
    </div>
    </AnimatedCard>
  );
}
