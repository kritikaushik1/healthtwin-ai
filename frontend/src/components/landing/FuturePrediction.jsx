import { motion } from "framer-motion";
import {
  CalendarDays,
  TrendingUp,
  HeartPulse,
  Brain,
  Activity,
  ArrowRight,
} from "lucide-react";
import SectionTitle from "../ui/SectionTitle";

const timeline = [
  {
    time: "Today",
    title: "Current Health",
    score: "87",
    color: "bg-blue-500",
  },
  {
    time: "3 Months",
    title: "Health Improving",
    score: "91",
    color: "bg-green-500",
  },
  {
    time: "1 Year",
    title: "Excellent Lifestyle",
    score: "95",
    color: "bg-purple-500",
  },
];

const predictions = [
  {
    icon: HeartPulse,
    title: "Heart Health",
    value: "Low Risk",
    color: "text-green-600",
  },
  {
    icon: Brain,
    title: "Stress Level",
    value: "Moderate",
    color: "text-orange-500",
  },
  {
    icon: Activity,
    title: "Fitness",
    value: "Improving",
    color: "text-blue-600",
  },
];

export default function FuturePrediction() {
  return (
    <section className="bg-gradient-to-b from-white to-slate-50 py-24">

      <div className="mx-auto max-w-7xl px-6">

        <SectionTitle
          subtitle="FUTURE HEALTH PREDICTION"
          title="See Where Your Health Is Heading"
          description="Your Digital Twin continuously predicts future health based on lifestyle, habits, reports and AI analysis."
        />

        <div className="mt-20 grid gap-16 lg:grid-cols-2">

          {/* Timeline */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7 }}
          >

            <div className="rounded-[36px] bg-white p-8 shadow-2xl">

              <div className="flex items-center gap-3">

                <CalendarDays className="text-blue-600" />

                <h3 className="text-2xl font-bold">
                  Health Timeline
                </h3>

              </div>

              <div className="mt-10 space-y-8">

                {timeline.map((item, index) => (

                  <div
                    key={item.time}
                    className="flex items-center gap-6"
                  >

                    <div className="flex flex-col items-center">

                      <div className={`h-5 w-5 rounded-full ${item.color}`} />

                      {index !== timeline.length - 1 && (
                        <div className="h-16 w-1 bg-slate-200" />
                      )}

                    </div>

                    <div className="flex-1 rounded-2xl bg-slate-50 p-5">

                      <div className="flex items-center justify-between">

                        <div>

                          <p className="text-sm text-gray-500">
                            {item.time}
                          </p>

                          <h4 className="mt-1 text-xl font-bold">
                            {item.title}
                          </h4>

                        </div>

                        <div className="text-right">

                          <p className="text-sm text-gray-500">
                            Health Score
                          </p>

                          <p className="text-3xl font-bold text-blue-600">
                            {item.score}
                          </p>

                        </div>

                      </div>

                    </div>

                  </div>

                ))}

              </div>

            </div>

          </motion.div>

          {/* Prediction Cards */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7 }}
          >

            <div className="rounded-[36px] bg-gradient-to-br from-blue-600 to-indigo-600 p-8 text-white shadow-2xl">

              <div className="flex items-center gap-3">

                <TrendingUp />

                <h3 className="text-2xl font-bold">

                  AI Predictions

                </h3>

              </div>

              <div className="mt-10 space-y-5">

                {predictions.map((item) => {

                  const Icon = item.icon;

                  return (

                    <div
                      key={item.title}
                      className="flex items-center justify-between rounded-2xl bg-white/10 p-5 backdrop-blur-lg"
                    >

                      <div className="flex items-center gap-4">

                        <Icon />

                        <div>

                          <h4 className="font-semibold">
                            {item.title}
                          </h4>

                        </div>

                      </div>

                      <span className="font-bold">
                        {item.value}
                      </span>

                    </div>

                  );

                })}

              </div>

              <button className="mt-10 flex items-center gap-3 rounded-full bg-white px-7 py-4 font-semibold text-blue-600 transition hover:scale-105">

                View Complete Prediction

                <ArrowRight size={18} />

              </button>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}