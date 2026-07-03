import { motion } from "framer-motion";
import {
  Bot,
  Mic,
  Upload,
  Pill,
  Sparkles,
  Send,
  ShieldCheck,
  BrainCircuit,
} from "lucide-react";

import SectionTitle from "../ui/SectionTitle";

export default function AIFamilyDoctor() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-blue-50 py-28">

      {/* Background Blur */}

      <div className="absolute inset-0">

        <div className="absolute left-0 top-20 h-96 w-96 rounded-full bg-blue-300/20 blur-[120px]" />

        <div className="absolute right-0 bottom-10 h-96 w-96 rounded-full bg-purple-300/20 blur-[150px]" />

      </div>

      <div className="relative mx-auto max-w-7xl px-6">

        <SectionTitle
          subtitle="AI FAMILY DOCTOR"
          title="Meet Dr. Twin"
          description="Your personal AI doctor that learns from your reports, lifestyle and medical history to provide personalized healthcare guidance."
        />

        <div className="mt-20 grid items-center gap-16 lg:grid-cols-2">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
            className="relative"
          >

            {/* AI Avatar */}

            <div className="relative mx-auto flex h-80 w-80 items-center justify-center">

              <motion.div
                animate={{
                  scale: [1, 1.08, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="absolute h-full w-full rounded-full bg-blue-400/20 blur-3xl"
              />

              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  repeat: Infinity,
                  duration: 25,
                  ease: "linear",
                }}
                className="absolute h-[280px] w-[280px] rounded-full border border-dashed border-blue-300"
              />

              <motion.div
                animate={{
                  rotate: -360,
                }}
                transition={{
                  repeat: Infinity,
                  duration: 20,
                  ease: "linear",
                }}
                className="absolute h-[220px] w-[220px] rounded-full border border-dashed border-purple-300"
              />

              <div className="relative flex h-44 w-44 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 shadow-2xl">

                <Bot
                  size={80}
                  className="text-white"
                />

              </div>

            </div>

            {/* Online */}

            <motion.div

              animate={{
                y: [0, -8, 0],
              }}

              transition={{
                repeat: Infinity,
                duration: 2,
              }}

              className="absolute right-8 top-16 rounded-full bg-white px-5 py-3 shadow-xl"

            >

              <div className="flex items-center gap-3">

                <span className="h-3 w-3 rounded-full bg-green-500" />

                <span className="font-semibold">

                  AI Online

                </span>

              </div>

            </motion.div>

            {/* Secure */}

            <motion.div

              animate={{
                y: [0, 8, 0],
              }}

              transition={{
                repeat: Infinity,
                duration: 2.5,
              }}

              className="absolute left-0 bottom-8 rounded-3xl bg-white p-5 shadow-xl"

            >

              <div className="flex gap-4">

                <ShieldCheck className="text-green-500" />

                <div>

                  <h4 className="font-bold">

                    Secure

                  </h4>

                  <p className="text-sm text-gray-500">

                    End-to-End Encryption

                  </p>

                </div>

              </div>

            </motion.div>

          </motion.div>

          {/* RIGHT */}

          <motion.div

            initial={{
              opacity: 0,
              x: 60,
            }}

            whileInView={{
              opacity: 1,
              x: 0,
            }}

            viewport={{
              once: true,
            }}

            transition={{
              duration: .8,
            }}

          >

            <div className="rounded-[36px] border border-white/50 bg-white/80 p-8 shadow-2xl backdrop-blur-xl">

              {/* Header */}

              <div className="flex items-center justify-between">

                <div className="flex items-center gap-4">

                  <div className="rounded-2xl bg-blue-100 p-3">

                    <BrainCircuit className="text-blue-600" />

                  </div>

                  <div>

                    <h3 className="text-xl font-bold">

                      Dr. Twin

                    </h3>

                    <p className="text-sm text-green-600">

                      AI Family Doctor

                    </p>

                  </div>

                </div>

                <Sparkles className="text-blue-500" />

              </div>

              {/* Chat */}

              <div className="mt-8 space-y-5">

                {/* User */}

                <motion.div

                  initial={{
                    opacity: 0,
                    x: 30,
                  }}

                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}

                  className="flex justify-end"

                >

                  <div className="max-w-sm rounded-3xl rounded-br-lg bg-blue-600 px-5 py-4 text-white">

                    I've been feeling tired lately and getting frequent headaches.

                  </div>

                </motion.div>

                {/* AI */}

                <motion.div

                  initial={{
                    opacity: 0,
                    x: -30,
                  }}

                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}

                  transition={{
                    delay: .3,
                  }}

                  className="flex"

                >

                  <div className="max-w-md rounded-3xl rounded-bl-lg bg-slate-100 px-5 py-4 text-slate-700">

                    Hello 👋

                    <br /><br />

                    I analyzed your sleep pattern, hydration level and latest blood report.

                    <br /><br />

                    Possible reasons include:

                    <br /><br />

                    • Poor Sleep

                    <br />

                    • Mild Dehydration

                    <br />

                    • Low Vitamin D

                  </div>

                </motion.div>
                                {/* AI Suggestion Card */}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="rounded-3xl border border-blue-100 bg-gradient-to-r from-blue-50 to-indigo-50 p-5"
                >
                  <p className="text-sm font-semibold text-blue-700">
                    💡 AI Recommendation
                  </p>

                  <p className="mt-3 leading-7 text-slate-600">
                    Increase water intake to 2.5L/day, sleep at least 7–8
                    hours, and consider getting your Vitamin D levels checked.
                    Would you like me to generate a personalized 7-day recovery
                    plan?
                  </p>

                  <button className="mt-5 rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">
                    Generate Recovery Plan
                  </button>
                </motion.div>

              </div>

              {/* Quick Actions */}

              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">

                <button className="flex items-center justify-center gap-2 rounded-2xl bg-slate-100 px-4 py-4 font-medium transition hover:bg-blue-50 hover:text-blue-600">
                  <Mic size={18} />
                  Voice
                </button>

                <button className="flex items-center justify-center gap-2 rounded-2xl bg-slate-100 px-4 py-4 font-medium transition hover:bg-blue-50 hover:text-blue-600">
                  <Upload size={18} />
                  Upload Report
                </button>

                <button className="flex items-center justify-center gap-2 rounded-2xl bg-slate-100 px-4 py-4 font-medium transition hover:bg-blue-50 hover:text-blue-600">
                  <Pill size={18} />
                  Medicines
                </button>

              </div>

              {/* Suggested Questions */}

              <div className="mt-8">

                <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-500">
                  Suggested Questions
                </p>

                <div className="flex flex-wrap gap-3">

                  {[
                    "Explain my blood report",
                    "Suggest a healthy diet",
                    "How can I improve my sleep?",
                    "Can you explain my symptoms?",
                  ].map((question) => (
                    <button
                      key={question}
                      className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm transition hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600"
                    >
                      {question}
                    </button>
                  ))}

                </div>

              </div>

              {/* Chat Input */}

              <div className="mt-8 flex items-center gap-3 rounded-full border border-slate-200 bg-slate-50 px-4 py-3">

                <input
                  type="text"
                  placeholder="Ask Dr. Twin anything..."
                  className="flex-1 bg-transparent outline-none"
                />

                <button className="rounded-full bg-blue-600 p-3 text-white transition hover:bg-blue-700">
                  <Send size={18} />
                </button>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}