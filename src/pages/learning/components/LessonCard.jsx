import { completeLesson } from "../../../services/learning.service";
import AnimatedCard from "../../../components/ui/AnimatedCard";
export default function LessonCard({
  title,
  desc,
  time,
  level,
  status,
}) {
  const handleComplete = () => {
    const progress = completeLesson(title);
    alert(`Lesson completed! 🎉 +50 XP (Total XP: ${progress.xp})`);
  };

  return (
    <AnimatedCard>
    <div className="bg-slate-900 rounded-xl p-5 border border-slate-800 hover:border-cyan-500/40 transition">
      <h3 className="font-semibold text-lg mb-2">{title}</h3>

      <p className="text-sm text-slate-400 mb-4">{desc}</p>

      <div className="flex justify-between text-sm text-slate-500">
        <span>{time}</span>
        <span>{level}</span>
      </div>

      <button
        onClick={handleComplete}
        className="mt-4 w-full bg-cyan-600 hover:bg-cyan-500 text-black py-2 rounded-lg font-semibold transition"
      >
        Mark as Completed
      </button>
    </div>
    </AnimatedCard>
  );
}
