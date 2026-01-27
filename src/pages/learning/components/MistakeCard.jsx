import { motion } from "framer-motion";
import AnimatedCard from "../../../components/ui/AnimatedCard";
export default function MistakeCard({ title, desc }) {
  return (
    <AnimatedCard>
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-slate-900/60 border border-slate-800 rounded-xl p-6"
    >
      <h3 className="text-lg font-semibold text-white mb-2">
        {title}
      </h3>

      <p className="text-slate-400 text-sm mb-4">
        {desc}
      </p>

      <button className="text-cyan-400 text-sm font-medium hover:underline">
        Learn More →
      </button>
    </motion.div>
    </AnimatedCard>
  );
}
