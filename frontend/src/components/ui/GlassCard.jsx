import { motion } from "framer-motion";

export default function GlassCard({
  children,
  className = "",
  hover = true,
}) {
  return (
    <motion.div
      whileHover={
        hover
          ? {
              y: -6,
              scale: 1.01,
            }
          : {}
      }
      transition={{
        duration: 0.25,
      }}
      className={`
        rounded-[32px]
        border border-white/30
        bg-white/70
        backdrop-blur-xl
        shadow-2xl
        p-6
        transition-all
        duration-300
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}