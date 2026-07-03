import { motion } from "framer-motion";
import DashboardPreview from "../dashboardPreview/DashboardPreview";
import HeroBadge from "./HeroBadge";
import HeroButtons from "./HeroButtons";
import TrustBadges from "./TrustBadges";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50/70 to-indigo-50 pt-32 sm:pt-36 lg:pt-40">
         {/* Background Glow */}

<div className="absolute inset-0 overflow-hidden">

  <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-blue-200/30 blur-[140px]" />

  <div className="absolute right-0 top-40 h-[600px] w-[600px] rounded-full bg-purple-300/20 blur-[180px]" />

  <div className="absolute bottom-0 left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-cyan-200/20 blur-[160px]" />

</div>
      

 <div className="grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr] xl:grid-cols-[1fr_1fr]">

        {/* Left */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
        >

          <HeroBadge />

         <h1 className="mt-8 text-5xl font-black leading-[1.05] text-slate-900 sm:text-6xl lg:text-7xl">

            Your AI Family
            <br />

            Doctor

            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">

              {" "}That Grows
              <br />
              With You.

            </span>

          </h1>

          <p className="mt-8 max-w-lg text-base leading-8 text-slate-600 sm:text-lg lg:text-xl">

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

          className="mt-14 flex justify-center lg:mt-0 lg:justify-end"
        >

          <DashboardPreview />

        </motion.div>

      </div>

    </section>
  );
}