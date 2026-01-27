import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="text-white">
      <h2 className="text-2xl font-bold text-center mb-2">
        Login to <span className="text-cyan-400">AI Trade Coach</span>
      </h2>

      <p className="text-slate-400 text-sm text-center mb-6">
        Access your AI-powered trading dashboard
      </p>

      <div className="space-y-4">
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="
            w-full px-4 py-3 rounded-lg
            bg-slate-900 border border-slate-700
            text-white placeholder-slate-500
            focus:outline-none focus:ring-2 focus:ring-cyan-400/40
          "
        />

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="
            w-full px-4 py-3 rounded-lg
            bg-slate-900 border border-slate-700
            text-white placeholder-slate-500
            focus:outline-none focus:ring-2 focus:ring-cyan-400/40
          "
        />

        <button
          className="
            w-full py-3 rounded-lg font-semibold
            bg-cyan-400 text-black
            hover:bg-cyan-300
            transition shadow-[0_0_20px_rgba(34,211,238,0.6)]
          "
        >
          Login
        </button>
      </div>

      {/* Register Navigation */}
      <div className="text-center text-sm text-slate-400 mt-6">
        Don’t have an account?{" "}
        <span
          onClick={() => navigate("/register")}
          className="text-cyan-400 hover:underline cursor-pointer"
        >
          Register
        </span>
      </div>
    </div>
  );
}
