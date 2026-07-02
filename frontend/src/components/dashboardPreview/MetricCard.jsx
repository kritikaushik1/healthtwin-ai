import { motion } from "framer-motion";

export default function MetricCard({
  icon,
  title,
  value,
  subtitle,
  iconBg = "bg-blue-100",
  iconColor = "text-blue-600",
}) {
  return (
    <motion.div
      whileHover={{
        y: -5,
        scale: 1.02,
      }}
      transition={{ duration: 0.25 }}
      className="
        w-full
        rounded-3xl
        bg-white/80
        backdrop-blur-xl
        border
        border-gray-100
        p-5
        shadow-lg
      "
    >
      <div
        className={`
          w-12
          h-12
          rounded-2xl
          flex
          items-center
          justify-center
          ${iconBg}
        `}
      >
        <div className={iconColor}>
          {icon}
        </div>
      </div>

      <p className="mt-5 text-sm text-gray-500">
        {title}
      </p>

      <h3 className="mt-1 text-2xl font-bold text-gray-900">
        {value}
      </h3>

      {subtitle && (
        <p className="mt-1 text-sm text-gray-400">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
