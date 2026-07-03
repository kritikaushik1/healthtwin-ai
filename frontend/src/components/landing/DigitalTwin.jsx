import { motion } from "framer-motion";
import {
  Brain,
  HeartPulse,
  Activity,
  ShieldPlus,
  ArrowRight,
} from "lucide-react";
import SectionTitle from "../ui/SectionTitle";

const features = [
  {
    icon: Brain,
    title: "Learns From Your Lifestyle",
    description:
      "Continuously adapts using your sleep, food, activity and health habits.",
  },
  {
    icon: HeartPulse,
    title: "Predicts Future Health",
    description:
      "Estimates disease risks before symptoms become severe.",
  },
  {
    icon: Activity,
    title: "Tracks Your Progress",
    description:
      "Compares your reports over time and measures improvements.",
  },
  {
    icon: ShieldPlus,
    title: "Personalized Recommendations",
    description:
      "Every recommendation is unique to your own health profile.",
  },
];

export default function DigitalTwin() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <SectionTitle
          subtitle="DIGITAL HEALTH TWIN"
          title="Your Personal AI Doctor That Never Stops Learning"
          description="Unlike traditional healthcare apps, your Health Twin continuously evolves as new reports, habits and lifestyle changes are added."
        />

        <div className="mt-20 grid items-center gap-16 lg:grid-cols-2">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7 }}
            className="relative flex justify-center"
          >

            <div className="relative flex h-[500px] w-[320px] items-center justify-center rounded-[40px] bg-gradient-to-br from-blue-100 via-white to-purple-100 shadow-2xl">

              <img
                src="/human-body.png"
                alt="Human Body"
                className="h-[420px] object-contain"
              />

              <motion.div
                animate={{
                  scale: [1, 1.15, 1],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                }}
                className="absolute top-24 left-1/2 h-4 w-4 rounded-full bg-blue-600"
              />

              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2.5,
                }}
                className="absolute top-48 left-24 h-4 w-4 rounded-full bg-pink-500"
              />

              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                }}
                className="absolute bottom-28 right-24 h-4 w-4 rounded-full bg-green-500"
              />

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7 }}
          >

            {features.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="mb-8 rounded-3xl border border-slate-100 bg-slate-50 p-6 transition hover:shadow-xl"
                >

                  <div className="flex items-center gap-4">

                    <div className="rounded-2xl bg-blue-100 p-4">
                      <Icon className="text-blue-600" />
                    </div>

                    <div>

                      <h3 className="text-xl font-bold">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-slate-600 leading-7">
                        {item.description}
                      </p>

                    </div>

                  </div>

                </div>
              );
            })}

            <button className="mt-8 flex items-center gap-3 rounded-full bg-blue-600 px-7 py-4 font-semibold text-white transition hover:bg-blue-700">
              Learn More
              <ArrowRight size={18} />
            </button>

          </motion.div>

        </div>

      </div>
    </section>
  );
}