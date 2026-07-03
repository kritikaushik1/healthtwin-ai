import { motion } from "framer-motion";
import {
  ShieldCheck,
  Lock,
  Database,
  Fingerprint,
  Cloud,
  CheckCircle2,
} from "lucide-react";

import SectionTitle from "../ui/SectionTitle";

const security = [
  {
    icon: Lock,
    title: "End-to-End Encryption",
    description:
      "Every medical report and conversation is encrypted before storage.",
  },
  {
    icon: Database,
    title: "Secure Cloud Storage",
    description:
      "Health records are securely stored with encrypted cloud infrastructure.",
  },
  {
    icon: Fingerprint,
    title: "Private Access",
    description:
      "Only you can access your Digital Health Twin and medical history.",
  },
  {
    icon: Cloud,
    title: "AI Processing",
    description:
      "AI analyzes your health data securely without exposing personal information.",
  },
];

export default function Privacy() {
  return (
    <section className="bg-slate-50 py-24">

      <div className="mx-auto max-w-7xl px-6">

        <SectionTitle
          subtitle="PRIVACY & SECURITY"
          title="Your Health Data Always Belongs To You"
          description="Security isn't a feature—it's the foundation of HealthTwin AI."
        />

        <div className="mt-20 grid gap-14 lg:grid-cols-2">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7 }}
            className="relative flex items-center justify-center"
          >

            <div className="relative flex h-[420px] w-[420px] items-center justify-center rounded-full bg-gradient-to-br from-blue-100 via-white to-purple-100 shadow-2xl">

              <motion.div
                animate={{
                  scale: [1, 1.08, 1],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                }}
                className="absolute h-[320px] w-[320px] rounded-full border-2 border-dashed border-blue-300"
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
                className="absolute h-[240px] w-[240px] rounded-full border border-dashed border-purple-300"
              />

              <div className="rounded-full bg-blue-600 p-10 shadow-2xl">

                <ShieldCheck
                  size={80}
                  className="text-white"
                />

              </div>

            </div>

          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7 }}
          >

            <div className="space-y-6">

              {security.map((item) => {

                const Icon = item.icon;

                return (

                  <div
                    key={item.title}
                    className="rounded-3xl bg-white p-6 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
                  >

                    <div className="flex gap-5">

                      <div className="rounded-2xl bg-blue-100 p-4">

                        <Icon className="text-blue-600" />

                      </div>

                      <div>

                        <h3 className="text-xl font-bold text-slate-900">
                          {item.title}
                        </h3>

                        <p className="mt-3 leading-7 text-slate-600">
                          {item.description}
                        </p>

                      </div>

                    </div>

                  </div>

                );

              })}

            </div>

            <div className="mt-10 rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 p-7 text-white shadow-xl">

              <div className="flex items-start gap-4">

                <CheckCircle2 className="mt-1" />

                <div>

                  <h3 className="text-2xl font-bold">

                    Privacy Promise

                  </h3>

                  <p className="mt-4 leading-8 text-blue-100">

                    HealthTwin AI never sells your personal health data.
                    Your reports, AI conversations, Digital Twin and
                    predictions remain completely private and under your
                    control.

                  </p>

                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}