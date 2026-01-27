import { useState } from "react";
import { quizData } from "./quizData";
import AnimatedCard from "../../../components/ui/AnimatedCard";
export default function QuizCard({ topic = "RSI" }) {
  const quiz = quizData[topic];
  const [selected, setSelected] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const isCorrect = selected === quiz.answer;

  return (
    <AnimatedCard>
    <div className="bg-slate-900 rounded-xl p-6 border border-slate-800">
      <h3 className="font-semibold mb-4">
        🧠 Quick Quiz: {topic}
      </h3>

      <p className="mb-4 text-slate-300">{quiz.question}</p>

      <div className="space-y-2">
        {quiz.options.map((opt, i) => (
          <button
            key={i}
            onClick={() => setSelected(i)}
            className={`w-full text-left px-4 py-2 rounded-lg transition ${
              selected === i
                ? "bg-cyan-600 text-black"
                : "bg-slate-800 hover:bg-slate-700"
            }`}
          >
            {opt}
          </button>
        ))}
      </div>

      <button
        onClick={() => setSubmitted(true)}
        disabled={selected === null}
        className="mt-4 w-full bg-green-500 text-black py-2 rounded-lg font-semibold"
      >
        Submit Answer
      </button>

      {submitted && (
        <div className="mt-4 p-4 rounded-lg bg-slate-800">
          <p
            className={`font-semibold ${
              isCorrect ? "text-green-400" : "text-red-400"
            }`}
          >
            {isCorrect ? "Correct ✅" : "Incorrect ❌"}
          </p>

          <p className="text-slate-300 mt-2">
            🤖 AI Explanation: {quiz.explanation}
          </p>
        </div>
      )}
    </div>
    </AnimatedCard>
  );
}
