import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/"); // 👈 LANDING PAGE
  };

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="
        h-16 px-6 flex items-center justify-end
        bg-slate-950
      "
    >
      <button
        onClick={logout}
        className="
          px-4 py-2 rounded-lg text-sm font-medium
          border border-cyan-400/40
          text-cyan-400
          hover:bg-cyan-400/10
          hover:shadow-[0_0_20px_rgba(34,211,238,0.35)]
          transition-all duration-300
        "
      >
        Logout
      </button>
    </motion.header>
  );
}
