import { motion } from "framer-motion";
import {
  UserRound,
  ClipboardList,
  FileText,
  BrainCircuit,
  ArrowDown,
} from "lucide-react";

import SectionTitle from "../ui/SectionTitle";

const steps = [
  {
    icon: UserRound,
    title: "Create Your Profile",
    description:
      "Sign up securely and build your personal health profile with basic information.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: ClipboardList,
    title: "Complete Health Assessment",
    description:
      "Answer a smart questionnaire about your lifestyle, habits, family history and medical conditions.",
    color: "from-purple-500 to-indigo-500",
  },
  {
    icon: FileText,
    title: "Upload Medical Reports",
    description:
      "Upload blood tests, prescriptions and health reports. AI extracts and understands important medical information.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: BrainCircuit,
    title: "Meet Your AI Health Twin",
    description:
      "Your Digital Twin predicts health risks, explains reports and provides personalized recommendations.",
    color: "from-pink-500 to-rose-500",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <SectionTitle
          subtitle="HOW IT WORKS"
          title="Your Journey Towards Smarter Healthcare"
          description="Building your Digital Health Twin is simple, secure and completely personalized."
        />

        <div className="mt-20 flex flex-col items-center">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                className="w-full max-w-3xl"
              >

                <div className="flex gap-6">

                  <div className="flex flex-col items-center">

                    <div
                      className={`flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r ${step.color} shadow-xl`}
                    >
                      <Icon className="text-white" size={28} />
                    </div>

                    {index !== steps.length - 1 && (
                      <div className="my-4 flex justify-center">
                        <ArrowDown className="text-blue-500" />
                      </div>
                    )}

                  </div>

                  <div className="flex-1 rounded-3xl bg-white p-8 shadow-lg">

                    <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                      Step {index + 1}
                    </p>

                    <h3 className="mt-2 text-2xl font-bold text-slate-900">
                      {step.title}
                    </h3>

                    <p className="mt-4 leading-8 text-slate-600">
                      {step.description}
                    </p>

                  </div>

                </div>

              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}