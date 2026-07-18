import { motion } from "framer-motion";

export default function TypingIndicator({ label }) {
  return (
    <div className="flex justify-start">
      <div className="max-w-[80%] rounded-3xl bg-slate-100 px-4 py-3 text-sm text-slate-600">
        <div className="flex items-center gap-2">
          <span className="text-xs font-medium text-slate-500">{label}</span>
          <motion.span animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.8 }} className="h-2 w-2 rounded-full bg-blue-500" />
          <motion.span animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.8, delay: 0.15 }} className="h-2 w-2 rounded-full bg-blue-500" />
          <motion.span animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.8, delay: 0.3 }} className="h-2 w-2 rounded-full bg-blue-500" />
        </div>
      </div>
    </div>
  );
}
