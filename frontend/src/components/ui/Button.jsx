import { motion } from "framer-motion";

export default function Button({
  children,
  variant = "primary",
  size = "md",
  onClick,
  className = "",
}) {
  const variants = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700 shadow-lg",

    secondary:
      "bg-white border border-gray-300 text-gray-800 hover:bg-gray-100",

    outline:
      "border border-blue-600 text-blue-600 hover:bg-blue-50",

    danger:
      "bg-red-500 text-white hover:bg-red-600",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",

    md: "px-6 py-3 text-base",

    lg: "px-8 py-4 text-lg",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.96 }}
      onClick={onClick}
      className={`
      rounded-full
      font-semibold
      transition-all
      duration-300
      ${variants[variant]}
      ${sizes[size]}
      ${className}
      `}
    >
      {children}
    </motion.button>
  );
}