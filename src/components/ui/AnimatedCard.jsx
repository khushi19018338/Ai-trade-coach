import { motion } from "framer-motion";

export default function AnimatedCard({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.45,
        delay,
        ease: "easeOut",
      }}
      whileHover={{
        scale: 1.015,
        boxShadow: "0 0 30px rgba(34,211,238,0.25)",
      }}
      className="relative"
    >
      {children}
    </motion.div>
  );
}
