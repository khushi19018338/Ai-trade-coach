import AnimatedCard from "../../../components/ui/AnimatedCard";
export default function QuickQuestions() {
  const questions = [
    "Analyze my portfolio",
    "Best stocks to buy now",
    "Explain RSI indicator",
    "Risk assessment",
    "Bitcoin price prediction",
    "Create trading plan",
  ];

  return (
    <AnimatedCard>
    <div className="p-6 rounded-2xl bg-slate-900">
      <h4 className="font-semibold mb-4">Quick Questions</h4>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {questions.map((q) => (
          <button
            key={q}
            className="bg-slate-800 hover:bg-slate-700 transition px-4 py-3 rounded-lg text-sm text-left"
          >
            {q}
          </button>
        ))}
      </div>
    </div>
    </AnimatedCard>
  );
}
