import { useState } from "react";
import { Menu, X, HeartPulse } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    "Features",
    "How It Works",
    "Science",
    "Pricing",
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

        {/* Logo */}

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-3 cursor-pointer"
        >
          <div className="w-11 h-11 rounded-full bg-blue-600 flex items-center justify-center shadow-lg">
            <HeartPulse className="text-white" size={22} />
          </div>

          <div>
            <h1 className="font-bold text-xl text-gray-900">
              HealthTwin AI
            </h1>
          </div>
        </motion.div>

        {/* Desktop Menu */}

        <ul className="hidden lg:flex gap-10 text-gray-600 font-medium">

          {navItems.map((item) => (
            <motion.li
              key={item}
              whileHover={{ y: -2 }}
              className="cursor-pointer hover:text-blue-600 transition"
            >
              {item}
            </motion.li>
          ))}

        </ul>

        {/* Buttons */}

        <div className="hidden lg:flex items-center gap-5">

          <button className="font-medium text-gray-700 hover:text-blue-600 transition">
            Sign In
          </button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: .95 }}
            className="bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-3 rounded-full font-semibold shadow-lg"
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

          className="lg:hidden bg-white px-8 pb-8"
        >

          <ul className="space-y-5">

            {navItems.map((item) => (
              <li key={item}>{item}</li>
            ))}

          </ul>

          <button className="mt-6 w-full bg-blue-600 text-white py-3 rounded-full">

            Get Started Free

          </button>

        </motion.div>

      )}

    </nav>
  );
}