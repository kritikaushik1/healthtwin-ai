import { motion } from "framer-motion";
import {
  Star,
  HeartPulse,
  ShieldCheck,
  BrainCircuit,
} from "lucide-react";

import SectionTitle from "../ui/SectionTitle";

const testimonials = [
  {
    name: "Sarah Johnson",
    age: "29 Years",
    image: "https://i.pravatar.cc/150?img=32",
    title: "Fitness Enthusiast",
    review:
      "HealthTwin AI helped me understand my blood reports and improve my daily routine. The AI Doctor feels like having a personal healthcare assistant.",
    score: "72 → 91",
    icon: HeartPulse,
    color: "from-pink-500 to-red-500",
  },
  {
    name: "Michael Chen",
    age: "41 Years",
    image: "https://i.pravatar.cc/150?img=14",
    title: "Working Professional",
    review:
      "The Future Prediction feature motivated me to improve my sleep and exercise habits. My Health Score improved within weeks.",
    score: "68 → 88",
    icon: BrainCircuit,
    color: "from-blue-500 to-indigo-500",
  },
  {
    name: "Emma Wilson",
    age: "35 Years",
    image: "https://i.pravatar.cc/150?img=47",
    title: "Mother of Two",
    review:
      "Uploading reports and getting AI explanations saved me countless hours searching medical terms online.",
    score: "76 → 94",
    icon: ShieldCheck,
    color: "from-green-500 to-emerald-500",
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-white py-24">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-blue-100 blur-[130px]" />

        <div className="absolute right-0 bottom-10 h-80 w-80 rounded-full bg-purple-100 blur-[150px]" />

      </div>

      <div className="relative mx-auto max-w-7xl px-6">

        <SectionTitle
          subtitle="SUCCESS STORIES"
          title="Trusted By People Building Healthier Lives"
          description="Our AI helps people understand their health better and make smarter lifestyle decisions."
        />

        <div className="mt-20 grid gap-8 lg:grid-cols-3">

          {testimonials.map((user, index) => {

            const Icon = user.icon;

            return (

              <motion.div
                key={user.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.15,
                  duration: .6,
                }}
                whileHover={{
                  y: -10,
                }}
                className="rounded-[34px] border border-slate-100 bg-white/80 p-8 shadow-xl backdrop-blur-xl"
              >

                {/* Stars */}

                <div className="mb-6 flex">

                  {[...Array(5)].map((_, i) => (

                    <Star
                      key={i}
                      size={18}
                      className="fill-yellow-400 text-yellow-400"
                    />

                  ))}

                </div>

                {/* Review */}

                <p className="leading-8 text-slate-600">

                  "{user.review}"

                </p>

                {/* Health Score */}

                <div
                  className={`mt-8 rounded-2xl bg-gradient-to-r ${user.color} p-5 text-white`}
                >

                  <div className="flex items-center justify-between">

                    <div className="flex items-center gap-3">

                      <Icon />

                      <span className="font-semibold">

                        Health Score

                      </span>

                    </div>

                    <span className="text-2xl font-bold">

                      {user.score}

                    </span>

                  </div>

                </div>

                {/* User */}

                <div className="mt-8 flex items-center gap-4">

                  <img
                    src={user.image}
                    alt={user.name}
                    className="h-16 w-16 rounded-full object-cover"
                  />

                  <div>

                    <h3 className="font-bold text-slate-900">

                      {user.name}

                    </h3>

                    <p className="text-sm text-slate-500">

                      {user.title}

                    </p>

                    <p className="text-sm text-blue-600">

                      {user.age}

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