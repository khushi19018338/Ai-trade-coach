import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-slate-950 text-white overflow-hidden">

      {/* Neon glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.18),transparent_65%)]" />

      <div className="relative z-10 flex min-h-screen flex-col">

        {/* Header */}
        <header className="flex justify-between items-center px-10 py-6 border-b border-slate-800">
          <h1 className="text-2xl font-bold text-cyan-400">
            AI Trade Coach
          </h1>

          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate("/login")}
              className="text-slate-300 hover:text-white transition"
            >
              Login
            </button>

            <button
              onClick={() => navigate("/register")}
              className="
                px-5 py-2 rounded-lg font-semibold
                bg-cyan-400 text-black
                hover:bg-cyan-300 transition
                shadow-[0_0_20px_rgba(34,211,238,0.6)]
              "
            >
              Get Started
            </button>
          </div>
        </header>

        {/* Hero Section */}
        <main className="flex-1 flex items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="text-center max-w-2xl"
          >
            <h2 className="text-5xl font-extrabold mb-6">
              Trade Smarter with{" "}
              <span className="text-cyan-400">AI</span>
            </h2>

            <p className="text-lg text-slate-400 mb-10">
              Not just signals — an AI that teaches, manages risk,
              and improves your trading decisions.
            </p>

            <button
              onClick={() => navigate("/register")}
              className="
                px-10 py-4 rounded-xl text-lg font-semibold
                bg-cyan-400 text-black
                hover:bg-cyan-300 hover:scale-105 transition
                shadow-[0_0_30px_rgba(34,211,238,0.7)]
              "
            >
              Start Free
            </button>
          </motion.div>
        </main>

        {/* Footer */}
        <footer className="text-center text-slate-500 py-6 border-t border-slate-800">
          © 2026 AI Trade Coach
        </footer>
      </div>
    </div>
  );
}
