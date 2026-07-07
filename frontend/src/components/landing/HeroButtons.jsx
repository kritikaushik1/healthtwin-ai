import { Play } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function HeroButtons() {

  const navigate = useNavigate();

  return (
    <div className="mt-10 flex flex-wrap gap-5">

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate("/signup")}
        className="rounded-full bg-blue-600 px-8 py-4 font-semibold text-white shadow-xl transition hover:bg-blue-700"
      >
        Get Started Free →
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate("/login")}
        className="flex items-center gap-3 rounded-full border border-gray-200 bg-white px-8 py-4 font-semibold shadow-md"
      >
        <Play size={18} />
        Watch Demo
      </motion.button>

    </div>
  );
}