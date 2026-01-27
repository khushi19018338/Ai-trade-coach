import LoginForm from "./components/LoginForm";
import { motion } from "framer-motion";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 relative overflow-hidden">
      
      {/* Neon radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.18),transparent_55%)]" />

      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="relative z-10"
      >
        <div className="
          w-[420px] p-8 rounded-2xl
          bg-gradient-to-br from-slate-900 to-slate-800
          border border-cyan-400/30
          shadow-[0_0_80px_rgba(34,211,238,0.35)]
        ">
          <LoginForm />
        </div>
      </motion.div>
    </div>
  );
}
