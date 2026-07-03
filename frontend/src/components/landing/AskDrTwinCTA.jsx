import { motion } from "framer-motion";
import {
  Sparkles,
  Mic,
  Send,
  Upload,
  Bot,
} from "lucide-react";

export default function AskDrTwinCTA() {
  return (
    <section className="relative overflow-hidden py-28">

      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-700" />

      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-cyan-400/20 blur-[140px]" />

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-pink-400/20 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="rounded-[40px] border border-white/20 bg-white/10 p-10 shadow-2xl backdrop-blur-2xl"
        >

          {/* Heading */}

          <div className="text-center">

            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-white/15">

              <Bot
                size={50}
                className="text-white"
              />

            </div>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/15 px-5 py-2 text-white">

              <Sparkles size={18} />

              AI Powered Healthcare

            </div>

            <h2 className="mt-8 text-4xl font-black text-white sm:text-6xl">

              Ask Dr. Twin

            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100">

              Get instant AI-powered explanations of symptoms, medical
              reports, medicines, diet plans and personalized health
              recommendations.

            </p>

          </div>

          {/* Chat Box */}

          <div className="mx-auto mt-14 max-w-4xl">

            <div className="rounded-[30px] bg-white p-3 shadow-xl">

              <div className="flex flex-col gap-3 lg:flex-row">

                <input
                  type="text"
                  placeholder="Ask Dr. Twin anything about your health..."
                  className="flex-1 rounded-2xl border border-slate-200 px-6 py-5 outline-none transition focus:border-blue-500"
                />

                <button className="rounded-2xl bg-blue-600 p-5 text-white transition hover:scale-105 hover:bg-blue-700">

                  <Send />

                </button>

              </div>

            </div>

          </div>

          {/* Quick Actions */}

          <div className="mt-10 flex flex-wrap justify-center gap-5">

            <button className="flex items-center gap-3 rounded-full bg-white/15 px-6 py-4 text-white transition hover:bg-white hover:text-blue-700">

              <Mic size={20} />

              Voice Consultation

            </button>

            <button className="flex items-center gap-3 rounded-full bg-white/15 px-6 py-4 text-white transition hover:bg-white hover:text-blue-700">

              <Upload size={20} />

              Upload Medical Report

            </button>

            <button className="rounded-full bg-white px-8 py-4 font-bold text-blue-700 transition hover:scale-105">

              Create My Health Twin

            </button>

          </div>

          {/* Example Questions */}

          <div className="mt-14">

            <p className="text-center text-sm font-semibold uppercase tracking-[0.3em] text-blue-100">

              Popular Questions

            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-4">

              {[
                "Explain my blood report",
                "Why am I feeling tired?",
                "Suggest a healthy diet",
                "Can I take these medicines together?",
                "How can I improve my sleep?",
              ].map((item) => (

                <button
                  key={item}
                  className="rounded-full border border-white/20 bg-white/10 px-5 py-3 text-white transition hover:bg-white hover:text-blue-700"
                >

                  {item}

                </button>

              ))}

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}