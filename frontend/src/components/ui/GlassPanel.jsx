import { motion } from "framer-motion";

export default function GlassPanel({ children, className = "", hover = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      whileHover={hover ? { y: -4, scale: 1.01 } : undefined}
      className={`rounded-[28px] border border-white/70 bg-white/80 p-5 shadow-[0_25px_80px_-35px_rgba(37,99,235,0.45)] backdrop-blur-xl ${className}`}
    >
      {children}
    </motion.div>
  );
}
