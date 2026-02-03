import { useNavigate, Link } from "react-router-dom";
import API from "../../../services/api";
import { useState } from "react";

export default function LoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleLogin = async () => {
    try {
      setLoading(true);
      setError(null);
      // Call Mock API
      const res = await API.post("/auth/login", { email, password });

      // Store Auth Data
      localStorage.setItem("token", res.token);
      localStorage.setItem("userId", res.userId);
      localStorage.setItem("userName", res.name);

      // Navigate to Dashboard
      navigate("/dashboard");
    } catch (err) {
      setError("Invalid credentials. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="text-white">
      <h2 className="text-2xl font-bold text-center mb-2">
        Login to <span className="text-cyan-400">AI Trade Coach</span>
      </h2>

      <p className="text-slate-400 text-sm text-center mb-6">
        Access your AI-powered trading dashboard
      </p>

      {error && (
        <div className="mb-4 text-center text-sm text-red-400 bg-red-400/10 py-2 rounded">
          {error}
        </div>
      )}

      <div className="space-y-4">
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          disabled={loading}
          className="
            w-full px-4 py-3 rounded-lg
            bg-slate-900 border border-slate-700
            text-white placeholder-slate-500
            focus:outline-none focus:ring-2 focus:ring-cyan-400/40
            disabled:opacity-50
          "
        />

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          disabled={loading}
          className="
            w-full px-4 py-3 rounded-lg
            bg-slate-900 border border-slate-700
            text-white placeholder-slate-500
            focus:outline-none focus:ring-2 focus:ring-cyan-400/40
            disabled:opacity-50
          "
        />

        <button
          onClick={handleLogin}
          disabled={loading}
          className="
            w-full py-3 rounded-lg font-semibold
            bg-cyan-400 text-black
            hover:bg-cyan-300
            transition shadow-[0_0_20px_rgba(34,211,238,0.6)]
            disabled:opacity-50 disabled:cursor-not-allowed
          "
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </div>

      {/* Register Navigation */}
      <div className="text-center text-sm text-slate-400 mt-6">
        Don’t have an account?{" "}
        <Link
          to="/register"
          className="text-cyan-400 hover:underline cursor-pointer"
        >
          Register
        </Link>
      </div>
    </div>
  );
}
