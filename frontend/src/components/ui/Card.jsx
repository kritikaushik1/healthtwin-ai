import { motion } from "framer-motion";

export default function Card({ children, className = "" }) {
  return (
    <motion.div
      whileHover={{
        y: -6,
      }}
      className={`
      rounded-3xl
      bg-white
      shadow-xl
      border
      border-gray-100
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