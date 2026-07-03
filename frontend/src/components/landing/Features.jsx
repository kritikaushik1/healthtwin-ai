import { motion } from "framer-motion";
import {
  Brain,
  HeartPulse,
  FileText,
  Activity,
  BellRing,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

import SectionTitle from "../ui/SectionTitle";

const features = [
  {
    icon: Brain,
    title: "AI Family Doctor",
    description:
      "Get personalized health guidance powered by AI that continuously learns from your health history and lifestyle.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: HeartPulse,
    title: "Digital Health Twin",
    description:
      "Create your own virtual health twin that evolves with every report, symptom and lifestyle update.",
    color: "from-pink-500 to-red-500",
  },
  {
    icon: FileText,
    title: "Smart Report Analysis",
    description:
      "Upload medical reports and instantly receive simplified AI explanations with important highlights.",
    color: "from-purple-500 to-indigo-500",
  },
  {
    icon: Activity,
    title: "Disease Risk Prediction",
    description:
      "Predict future health risks using machine learning models trained on healthcare datasets.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: BellRing,
    title: "Medication & Lifestyle",
    description:
      "Receive medicine reminders, diet suggestions, workouts and personalized daily recommendations.",
    color: "from-orange-500 to-yellow-500",
  },
  {
    icon: ShieldCheck,
    title: "Privacy First",
    description:
      "Your health data stays encrypted and secure with privacy-focused architecture.",
    color: "from-slate-600 to-slate-800",
  },
];

export default function Features() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-[1500px] px-6">

        <SectionTitle
          subtitle="WHY HEALTHTWIN AI?"
          title="Everything You Need For Smarter Healthcare"
          description="HealthTwin AI combines Artificial Intelligence, Machine Learning and Digital Twin technology into one beautiful platform that grows with you."
        />

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -10,
                }}
                className="group rounded-[32px] border border-slate-100 bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-2xl"
              >

                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${feature.color}`}
                >
                  <Icon className="text-white" size={30} />
                </div>

                <h3 className="mt-8 text-2xl font-bold text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-5 leading-8 text-slate-600">
                  {feature.description}
                </p>

                <button
                  className="mt-8 flex items-center gap-2 font-semibold text-blue-600 transition-all group-hover:gap-4"
                >
                  Learn More

                  <ArrowRight size={18} />
                </button>

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}