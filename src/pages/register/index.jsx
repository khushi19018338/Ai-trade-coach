import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    telegram: "",
  });

  const submit = (e) => {
    e.preventDefault();

    localStorage.setItem("token", "demo");
    localStorage.setItem("user", JSON.stringify(form));

    navigate("/dashboard");
  };

  return (
    <div className="relative min-h-screen bg-slate-950 flex items-center justify-center overflow-hidden">

      {/* Neon glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.18),transparent_65%)]" />

      <motion.form
        onSubmit={submit}
        initial={{ opacity: 0, y: 30, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="
          relative z-10
          w-96 p-8 rounded-2xl
          bg-gradient-to-br from-slate-900 to-slate-800
          border border-cyan-400/40
          shadow-[0_0_40px_rgba(34,211,238,0.15)]
        "
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-cyan-400">
          Create Account
        </h2>

        {/* Name */}
        <input
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="
            w-full px-4 py-3 mb-3 rounded-lg
            bg-slate-900 text-white
            border border-slate-700
            focus:outline-none focus:border-cyan-400
          "
        />

        {/* Email */}
        <input
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="
            w-full px-4 py-3 mb-3 rounded-lg
            bg-slate-900 text-white
            border border-slate-700
            focus:outline-none focus:border-cyan-400
          "
        />

        {/* Telegram ID */}
        <input
          placeholder="Telegram ID (e.g. @username)"
          value={form.telegram}
          onChange={(e) => setForm({ ...form, telegram: e.target.value })}
          className="
            w-full px-4 py-3 mb-3 rounded-lg
            bg-slate-900 text-white
            border border-slate-700
            focus:outline-none focus:border-cyan-400
          "
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          className="
            w-full px-4 py-3 mb-6 rounded-lg
            bg-slate-900 text-white
            border border-slate-700
            focus:outline-none focus:border-cyan-400
          "
        />

        {/* Button */}
        <button
          type="submit"
          className="
            w-full py-3 rounded-xl font-semibold
            bg-cyan-400 text-black
            hover:bg-cyan-300 hover:scale-[1.02]
            transition
            shadow-[0_0_25px_rgba(34,211,238,0.6)]
          "
        >
          Register
        </button>

        {/* Footer link */}
        <p className="mt-6 text-sm text-center text-slate-400">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-cyan-400 cursor-pointer hover:underline"
          >
            Login
          </span>
        </p>
      </motion.form>
    </div>
  );
}
