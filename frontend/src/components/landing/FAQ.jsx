import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SectionTitle from "../ui/SectionTitle";

const faqs = [
  {
    question: "What is HealthTwin AI?",
    answer:
      "HealthTwin AI is your personal AI Family Doctor that learns from your health history, lifestyle, medical reports and daily habits to create a Digital Health Twin.",
  },
  {
    question: "Can HealthTwin AI diagnose diseases?",
    answer:
      "No. HealthTwin AI provides AI-powered health insights, report explanations and risk predictions. It is designed to support—not replace—professional medical advice.",
  },
  {
    question: "Is my medical data secure?",
    answer:
      "Yes. Your reports and personal information are protected with encrypted storage and secure authentication. Privacy is a core part of the platform.",
  },
  {
    question: "Can I upload blood reports?",
    answer:
      "Yes. You can upload PDF or image reports. HealthTwin AI extracts important values, highlights abnormalities and explains them in simple language.",
  },
  {
    question: "How does the Digital Health Twin work?",
    answer:
      "Your Digital Twin continuously updates using your reports, health history, daily habits and AI analysis to provide personalized recommendations and future health insights.",
  },
  {
    question: "Will this work on mobile devices?",
    answer:
      "Absolutely. HealthTwin AI is fully responsive and optimized for mobile, tablet and desktop devices.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-slate-50 py-24">

      <div className="mx-auto max-w-5xl px-6">

        <SectionTitle
          subtitle="FREQUENTLY ASKED QUESTIONS"
          title="Everything You Need To Know"
          description="Still have questions? Here are the answers to the most common ones."
        />

        <div className="mt-16 space-y-5">

          {faqs.map((faq, index) => (

            <motion.div
              key={faq.question}
              layout
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg"
            >

              <button
                onClick={() =>
                  setActive(active === index ? -1 : index)
                }
                className="flex w-full items-center justify-between px-7 py-6 text-left"
              >

                <h3 className="text-lg font-semibold text-slate-900">

                  {faq.question}

                </h3>

                <motion.div
                  animate={{
                    rotate: active === index ? 180 : 0,
                  }}
                >

                  <ChevronDown />

                </motion.div>

              </button>

              <AnimatePresence>

                {active === index && (

                  <motion.div
                    initial={{
                      opacity: 0,
                      height: 0,
                    }}
                    animate={{
                      opacity: 1,
                      height: "auto",
                    }}
                    exit={{
                      opacity: 0,
                      height: 0,
                    }}
                  >

                    <p className="px-7 pb-6 leading-8 text-slate-600">

                      {faq.answer}

                    </p>

                  </motion.div>

                )}

              </AnimatePresence>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}