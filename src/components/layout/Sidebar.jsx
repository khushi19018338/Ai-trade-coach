import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Wallet,
  Repeat,
  Brain,
  GraduationCap,
} from "lucide-react";

export default function Sidebar() {
  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition ${isActive
      ? "bg-slate-800 text-cyan-400"
      : "text-slate-300 hover:bg-slate-800 hover:text-white"
    }`;

  return (
    <motion.aside
      initial={{ x: -80, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="w-64 bg-slate-950 border-r border-slate-800 h-screen flex flex-col"
    >
      {/* LOGO */}
      <div className="p-6 text-xl font-bold text-cyan-400 tracking-wide">
        Trade Coach
      </div>

      {/* NAV */}
      <nav className="px-3 space-y-1">
        <NavLink to="/dashboard" end className={linkClass}>
          <LayoutDashboard size={18} />
          Dashboard
        </NavLink>

        <NavLink to="/dashboard/learning" className={linkClass}>
          <GraduationCap size={18} />
          Learning
        </NavLink>

        {/* Everything else is context-driven (Stocks via search/click) */}
      </nav>

      {/* PUSH FOOTER DOWN */}
      <div className="flex-1" />

      {/* FOOTER */}
      <div className="p-4 text-xs text-slate-500 border-t border-slate-800">
        © 2026 AI Trade Coach
      </div>
    </motion.aside>
  );
}
