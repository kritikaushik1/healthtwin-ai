import { useState } from "react";
import { Menu, X, HeartPulse } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  const navItems = [
    "Features",
    "How It Works",
    "Science",
    "Pricing",
  ];

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-gray-100 bg-white/70 backdrop-blur-xl">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">

        {/* Logo */}

        <motion.div
          whileHover={{ scale: 1.05 }}
          onClick={() => navigate("/")}
          className="flex cursor-pointer items-center gap-3"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 shadow-lg">
            <HeartPulse className="text-white" size={22} />
          </div>

          <h1 className="text-xl font-bold text-gray-900">
            HealthTwin AI
          </h1>

        </motion.div>

        {/* Desktop Menu */}

        <ul className="hidden gap-10 font-medium text-gray-600 lg:flex">

          {navItems.map((item) => (
            <motion.li
              key={item}
              whileHover={{ y: -2 }}
              className="cursor-pointer transition hover:text-blue-600"
            >
              {item}
            </motion.li>
          ))}

        </ul>

        {/* Buttons */}

        <div className="hidden items-center gap-5 lg:flex">

          <button
            onClick={() => navigate("/login")}
            className="font-medium text-gray-700 transition hover:text-blue-600"
          >
            Sign In
          </button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/signup")}
            className="rounded-full bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-blue-700"
          >
            Get Started Free
          </motion.button>

        </div>

        {/* Mobile */}

        <button
          className="lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

      </div>

      {/* Mobile Menu */}

      {menuOpen && (

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white px-8 pb-8 lg:hidden"
        >

          <ul className="space-y-5">

            {navItems.map((item) => (
              <li key={item}>{item}</li>
            ))}

          </ul>

          <button
            onClick={() => navigate("/signup")}
            className="mt-6 w-full rounded-full bg-blue-600 py-3 text-white"
          >
            Get Started Free
          </button>

        </motion.div>

      )}

    </nav>
  );
}