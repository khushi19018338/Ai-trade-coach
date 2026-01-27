import { getProgress } from "../../../services/learning.service";
import AnimatedCard from "../../../components/ui/AnimatedCard";
export default function CertificateCard() {
  const { completedLessons, xp } = getProgress();

  const TOTAL_LESSONS = 3;
  const REQUIRED_XP = 150;

  const isEligible =
    completedLessons.length >= TOTAL_LESSONS && xp >= REQUIRED_XP;

  if (!isEligible) return null;

  return (
    <AnimatedCard>
    <div className="bg-gradient-to-r from-cyan-500 to-green-400 text-black rounded-xl p-6 text-center shadow-lg">
      <h2 className="text-2xl font-bold mb-2">
        🎓 Certificate of Completion
      </h2>

      <p className="mb-4">
        Congratulations! You have successfully completed
        the <strong>AI Trade Coach Learning Program</strong>.
      </p>

      <div className="text-sm opacity-80">
        Awarded to a disciplined trader who mastered
        technical indicators and risk management.
      </div>
    </div>
    </AnimatedCard>
  );
}
