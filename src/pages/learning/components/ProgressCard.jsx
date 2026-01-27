import { getProgress } from "../../../services/learning.service";
import AnimatedCard from "../../../components/ui/AnimatedCard";
export default function ProgressCard() {
  const progress = getProgress();

  const totalLessons = 3; // RSI, MACD, S/R
  const completed = progress.completedLessons.length;
  const percent = Math.min(
    Math.round((completed / totalLessons) * 100),
    100
  );

  return (
    <AnimatedCard>
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold text-lg">Learning Progress</h2>

        <div className="text-right">
          <p className="text-cyan-400 font-bold text-lg">
            {progress.xp} XP
          </p>
          <p className="text-xs text-slate-400">
            {completed}/{totalLessons} lessons
          </p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="h-2 bg-slate-800 rounded">
        <div
          className="h-2 rounded bg-gradient-to-r from-cyan-400 to-green-400 transition-all"
          style={{ width: `${percent}%` }}
        />
      </div>

      <p className="mt-2 text-sm text-slate-400">
        {percent}% completed
      </p>
    </div>
    </AnimatedCard>
  );
}
