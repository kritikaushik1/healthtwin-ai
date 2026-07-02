import { motion } from "framer-motion";

export default function CircularProgress({
  percentage = 87,
  size = 140,
  strokeWidth = 12,
}) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  const progress =
    circumference -
    (percentage / 100) * circumference;

  return (
    <div
      className="relative flex items-center justify-center"
      style={{
        width: size,
        height: size,
      }}
    >
      <svg
        width={size}
        height={size}
        className="-rotate-90"
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#E5E7EB"
          strokeWidth={strokeWidth}
          fill="none"
        />

        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#2563EB"
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{
            strokeDashoffset: circumference,
          }}
          animate={{
            strokeDashoffset: progress,
          }}
          transition={{
            duration: 1.5,
          }}
        />
      </svg>

      <div className="absolute text-center">
        <h2 className="text-3xl font-bold">
          {percentage}
        </h2>

        <p className="text-xs text-gray-500">
          Health
        </p>
      </div>
    </div>
  );
}