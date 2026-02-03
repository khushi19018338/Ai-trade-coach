import { motion } from "framer-motion";
import { useNavigate, Link, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import API from "../../services/api";

export default function Register() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [role, setRole] = useState("user"); // "user" or "mentor"

  useEffect(() => {
    const roleParam = searchParams.get("role");
    if (roleParam === "mentor") {
      setRole("mentor");
    }
  }, [searchParams]);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    telegram: "",
  });

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const payload = { ...form, role };
      // const res = await API.post("/auth/signup", payload); 
      // Mocking successful response for now
      const res = { token: "mock-token", userId: "user-123", name: form.name, role };

      localStorage.setItem("token", res.token);
      localStorage.setItem("userId", res.userId);
      localStorage.setItem("userName", res.name);
      localStorage.setItem("role", role);

      if (role === "mentor") {
        navigate("/mentor/onboarding");
      } else {
        navigate("/dashboard");
      }
    } catch (err) {
      setError("Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-slate-950 flex items-center justify-center overflow-hidden">

      {/* Neon glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.15),transparent_65%)]" />

      <motion.form
        onSubmit={submit}
        initial={{ opacity: 0, y: 30, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="
          relative z-10
          w-96 p-8 rounded-2xl
          bg-gradient-to-br from-slate-900 to-slate-800
          border border-emerald-500/30
          shadow-[0_0_40px_rgba(16,185,129,0.1)]
        "
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-emerald-400">
          Create {role === "mentor" ? "Mentor" : "Trader"} Account
        </h2>

        {/* Role Toggle */}
        <div className="flex bg-slate-950 rounded-lg p-1 mb-6 border border-slate-700">
          <button
            type="button"
            onClick={() => setRole("user")}
            className={`flex-1 py-1.5 text-sm font-medium rounded-md transition ${role === "user" ? "bg-emerald-600 text-white" : "text-slate-400 hover:text-white"
              }`}
          >
            Trader
          </button>
          <button
            type="button"
            onClick={() => setRole("mentor")}
            className={`flex-1 py-1.5 text-sm font-medium rounded-md transition ${role === "mentor" ? "bg-emerald-600 text-white" : "text-slate-400 hover:text-white"
              }`}
          >
            Mentor
          </button>
        </div>

        {/* Name */}
        <input
          placeholder="Name"
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="
            w-full px-4 py-3 mb-3 rounded-lg
            bg-slate-900 text-white
            border border-slate-700
            focus:outline-none focus:border-emerald-400
          "
        />

        {/* Email */}
        <input
          placeholder="Email"
          type="email"
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="
            w-full px-4 py-3 mb-3 rounded-lg
            bg-slate-900 text-white
            border border-slate-700
            focus:outline-none focus:border-emerald-400
          "
        />

        {/* Telegram ID - Optional for Mentor maybe? Keep for now */}
        <input
          placeholder="Telegram ID (e.g. @username)"
          value={form.telegram}
          onChange={(e) => setForm({ ...form, telegram: e.target.value })}
          className="
            w-full px-4 py-3 mb-3 rounded-lg
            bg-slate-900 text-white
            border border-slate-700
            focus:outline-none focus:border-emerald-400
          "
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          required
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          className="
            w-full px-4 py-3 mb-6 rounded-lg
            bg-slate-900 text-white
            border border-slate-700
            focus:outline-none focus:border-emerald-400
          "
        />

        {/* Button */}
        <button
          type="submit"
          disabled={loading}
          className="
            w-full py-3 rounded-xl font-semibold
            bg-emerald-500 text-black
            hover:bg-emerald-400 hover:scale-[1.02]
            transition
            shadow-[0_0_25px_rgba(16,185,129,0.4)]
          "
        >
          {loading ? "Registering..." : role === "mentor" ? "Continue to Profile" : "Start Trading"}
        </button>

        {error && <p className="text-red-400 text-center mt-4 text-sm">{error}</p>}

        {/* Footer link */}
        <p className="mt-6 text-sm text-center text-slate-400">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-emerald-400 cursor-pointer hover:underline"
          >
            Login
          </Link>
        </p>
      </motion.form>
    </div>
  );
}
