import { motion } from "framer-motion";

export default function PortfolioStatCard({ title, value, change, positive }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-6 shadow-lg"
    >
      <p className="text-sm text-slate-400">{title}</p>
      <h2 className="text-2xl font-bold mt-2">{value}</h2>

      {change && (
        <p className={`mt-2 text-sm ${positive ? "text-green-400" : "text-cyan-400"}`}>
          {change}
        </p>
      )}
    </motion.div>
  );
}
