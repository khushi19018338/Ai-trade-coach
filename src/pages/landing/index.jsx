import { motion } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-slate-950 text-white overflow-hidden">

      {/* Neon glow background - Adjusted colors for TradeGuru */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.15),transparent_65%)]" />

      <div className="relative z-10 flex min-h-screen flex-col">

        {/* Header */}
        <header className="flex justify-between items-center px-10 py-6 border-b border-slate-800">
          <h1 className="text-2xl font-bold text-emerald-400 tracking-wider">
            TradeGuru <span className="text-slate-500 text-sm font-normal ml-1">AI + Experts</span>
          </h1>

          <div className="flex items-center gap-6">
            <Link
              to="/login"
              className="text-slate-300 hover:text-white transition"
            >
              Login
            </Link>

            <Link
              to="/register?role=mentor"
              className="hidden md:block text-slate-300 hover:text-emerald-400 transition font-medium"
            >
              Become a Mentor
            </Link>

            <Link
              to="/register"
              className="
                px-5 py-2 rounded-lg font-semibold
                bg-emerald-500 text-black
                hover:bg-emerald-400 transition
                shadow-[0_0_20px_rgba(16,185,129,0.5)]
              "
            >
              Get Started
            </Link>
          </div>
        </header>

        {/* Hero Section */}
        <main className="flex-1 flex flex-col items-center justify-center px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <h2 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight">
              Master the Markets with <br />
              <span className="text-emerald-400">AI</span> & <span className="text-blue-400">Experts</span>
            </h2>

            <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
              TradeGuru connects you with top-tier trading mentors and provides real-time AI insights for smarter investing.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate("/register")}
                className="
                  px-10 py-4 rounded-xl text-lg font-bold
                  bg-emerald-500 text-black
                  hover:bg-emerald-400 hover:scale-105 transition
                  shadow-[0_0_30px_rgba(16,185,129,0.6)]
                "
              >
                Start Trading Now
              </button>

              <button
                onClick={() => navigate("/register?role=mentor")}
                className="
                  px-10 py-4 rounded-xl text-lg font-bold
                  bg-slate-800 text-white border border-slate-700
                  hover:bg-slate-700 hover:border-slate-500 transition
                "
              >
                Join as Mentor
              </button>
            </div>
          </motion.div>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl text-left"
          >
            <div className="p-6 bg-slate-900/50 border border-slate-800 rounded-xl backdrop-blur-sm">
              <h3 className="text-emerald-400 font-bold text-xl mb-2">AI-Powered Insights</h3>
              <p className="text-slate-400">Get real-time market analysis and portfolio health checks powered by Gemini API.</p>
            </div>
            <div className="p-6 bg-slate-900/50 border border-slate-800 rounded-xl backdrop-blur-sm">
              <h3 className="text-blue-400 font-bold text-xl mb-2">Expert Mentorship</h3>
              <p className="text-slate-400">Book 1-on-1 sessions with verified mentors to refine your trading strategies.</p>
            </div>
            <div className="p-6 bg-slate-900/50 border border-slate-800 rounded-xl backdrop-blur-sm">
              <h3 className="text-purple-400 font-bold text-xl mb-2">Portfolio Analytics</h3>
              <p className="text-slate-400">Track your P&L, diversification, and performance with advanced charting tools.</p>
            </div>
          </motion.div>
        </main>

        {/* Footer */}
        <footer className="text-center text-slate-500 py-6 border-t border-slate-800 mt-10">
          © 2026 TradeGuru Inc.
        </footer>
      </div>
    </div>
  );
}
