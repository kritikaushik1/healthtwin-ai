import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function AIInsightPopup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.8,
        delay: 0.4,
      }}
      className="
      absolute
      -top-10
      -right-6
      hidden
      xl:block
      w-72
      rounded-3xl
      bg-white
      p-5
      shadow-2xl
      border
      border-gray-100
      "
    >
      <div className="flex items-center gap-3">

        <div className="rounded-xl bg-blue-100 p-3">

          <Sparkles
            className="text-blue-600"
            size={20}
          />

        </div>

        <div>

          <h3 className="font-semibold">

            AI Insight

          </h3>

          <p className="text-xs text-gray-500">

            Updated just now

          </p>

        </div>

      </div>

      <p className="mt-4 text-sm leading-6 text-gray-600">

        Your sleep quality improved by
        <span className="font-semibold text-blue-600">
          {" "}18%
        </span>.
        AI predicts your Health Score
        could reach
        <span className="font-semibold">
          {" "}91
        </span>
        next week.

      </p>
    </motion.div>
  );
}