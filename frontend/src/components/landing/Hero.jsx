import { motion } from "framer-motion";
import DashboardPreview from "../dashboardPreview/DashboardPreview";
import HeroBadge from "./HeroBadge";
import HeroButtons from "./HeroButtons";
import TrustBadges from "./TrustBadges";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50 to-white pt-40">

      

  <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">

        {/* Left */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
        >

          <HeroBadge />

          <h1 className="mt-8 text-6xl font-extrabold leading-tight text-gray-900">

            Your AI Family
            <br />

            Doctor

            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">

              {" "}That Grows
              <br />
              With You.

            </span>

          </h1>

          <p className="mt-8 max-w-xl text-xl leading-9 text-gray-600">

            HealthTwin AI creates your personalized Digital Health Twin
            that continuously learns from your health history,
            lifestyle, medical reports, and daily habits to help you
            make smarter health decisions.

          </p>

          <HeroButtons />

          <TrustBadges />

        </motion.div>

        {/* Right */}

        <motion.div

          initial={{ opacity: 0, x: 60 }}

          animate={{ opacity: 1, x: 0 }}

          transition={{ duration: .8 }}

          className="hidden lg:flex justify-center"

        >

          <DashboardPreview />

        </motion.div>

      </div>

    </section>
  );
}