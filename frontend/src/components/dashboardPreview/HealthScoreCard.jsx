import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

export default function HealthScoreCard({
  score = 87,
  change = "+4 this month",
  status = "Excellent",
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="
        w-full
        rounded-3xl
        bg-gradient-to-r
        from-blue-600
        via-blue-500
        to-indigo-600
        p-6
        text-white
        shadow-2xl
      "
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-blue-100">
            Overall Health Score
          </p>

          <h1 className="mt-2 text-5xl font-bold">
            {score}
            <span className="text-xl font-medium">/100</span>
          </h1>

          <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-sm backdrop-blur-md">
            <TrendingUp size={16} />
            {change}
          </div>
        </div>

        <div className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-white/30 bg-white/10 backdrop-blur-md">
          <span className="text-2xl font-bold">
            {score}
          </span>
        </div>
      </div>

      <p className="mt-5 text-blue-100">
        Status:
        <span className="ml-2 font-semibold text-white">
          {status}
        </span>
      </p>
    </motion.div>
  );
}