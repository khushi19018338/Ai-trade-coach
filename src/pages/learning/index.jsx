import ProgressCard from "./components/ProgressCard";
import LessonCard from "./components/LessonCard";
import IndicatorList from "./components/IndicatorList";
import PaperTradingCard from "./components/PaperTradingCard";
import QuizCard from "./components/QuizCard"; // ✅ ADD THIS
import AICoachChat from "./components/AICoachChat";
import TradingViewLesson from "./components/TradingViewLesson";
import BadgesCard from "./components/BadgesCard";
import CertificateCard from "./components/CertificateCard";
import MistakesSection from "./components/MistakesSection";
export default function Learning() {
  return (
    <div className="space-y-10 text-white">

      {/* HEADER */}
      <div>
        <h1 className="text-3xl font-bold">Learning Mode</h1>
        <p className="text-slate-400 mt-1">
          Learn trading concepts step by step with AI guidance
        </p>
      </div>

      {/* PROGRESS */}
      <ProgressCard />
      <BadgesCard />

      {/* LESSONS */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Lessons</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <LessonCard
            title="Understanding RSI"
            desc="Learn how RSI identifies overbought & oversold zones."
            time="15 min"
            level="Beginner"
            status="Completed"
          />

          <LessonCard
            title="MACD Strategy"
            desc="Identify trend & momentum using MACD."
            time="15 min"
            level="Beginner"
            status="Learning"
          />

          <LessonCard
            title="Support & Resistance"
            desc="Spot strong buying & selling zones."
            time="15 min"
            level="Beginner"
            status="Not Started"
          />
        </div>
      </section>

      {/* QUIZ SECTION */}
      <section>
        <h2 className="text-xl font-semibold mb-4">
          Quick Knowledge Check
        </h2>

        <QuizCard topic="RSI" />
      </section>
      {/* AI COACH */}
      <section>
        <h2 className="text-xl font-semibold mb-4">
          Ask AI Coach
        </h2>

        <AICoachChat lesson="RSI" />
      </section>
      {/* LIVE CHART LESSON */}
      <section>
        <h2 className="text-xl font-semibold mb-4">
          Live Chart Practice
        </h2>

        <TradingViewLesson
          initialSymbol="NSE:RELIANCE"
          title="Apply RSI on Live Market"
        />
      </section>

      {/* PRACTICE & INDICATORS */}
      <section>
        <h2 className="text-xl font-semibold mb-4">
          Practice & Analysis
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <IndicatorList />
          <PaperTradingCard />
        </div>
      </section>
      <MistakesSection />

      {/* CERTIFICATE */}
      <section>
        <CertificateCard />
      </section>

    </div>
  );
}
