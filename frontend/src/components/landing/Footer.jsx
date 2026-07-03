import {
  HeartPulse,
  Mail,
  ArrowRight,
} from "lucide-react";
export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-950 text-white">

      {/* Top Gradient */}

      <div className="h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500" />

      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-600/20 blur-[140px]" />

      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-purple-600/20 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-14 lg:grid-cols-5">

          {/* Logo */}

          <div className="lg:col-span-2">

            <div className="flex items-center gap-3">

              <div className="rounded-2xl bg-blue-600 p-3">

                <HeartPulse className="text-white" />

              </div>

              <h2 className="text-3xl font-black">

                HealthTwin AI

              </h2>

            </div>

            <p className="mt-6 max-w-md leading-8 text-slate-400">

              Your AI Family Doctor that grows with you.
              Monitor, predict and improve your health using
              Artificial Intelligence and Digital Twin technology.

            </p>

            {/* Newsletter */}

            <div className="mt-10">

              <h3 className="font-semibold">

                Stay Updated

              </h3>

              <div className="mt-4 flex">

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 rounded-l-full border-none bg-slate-800 px-5 py-4 outline-none"
                />

                <button className="rounded-r-full bg-blue-600 px-6 transition hover:bg-blue-700">

                  <ArrowRight />

                </button>

              </div>

            </div>

          </div>

          {/* Product */}

          <div>

            <h3 className="text-lg font-bold">

              Product

            </h3>

            <ul className="mt-6 space-y-4 text-slate-400">

              <li className="hover:text-white cursor-pointer">
                Dashboard
              </li>

              <li className="hover:text-white cursor-pointer">
                AI Doctor
              </li>

              <li className="hover:text-white cursor-pointer">
                Reports
              </li>

              <li className="hover:text-white cursor-pointer">
                Predictions
              </li>

              <li className="hover:text-white cursor-pointer">
                Health Twin
              </li>

            </ul>

          </div>

          {/* Resources */}

          <div>

            <h3 className="text-lg font-bold">

              Resources

            </h3>

            <ul className="mt-6 space-y-4 text-slate-400">

              <li className="hover:text-white cursor-pointer">
                Blog
              </li>

              <li className="hover:text-white cursor-pointer">
                Documentation
              </li>

              <li className="hover:text-white cursor-pointer">
                FAQ
              </li>

              <li className="hover:text-white cursor-pointer">
                Privacy
              </li>

              <li className="hover:text-white cursor-pointer">
                Terms
              </li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-lg font-bold">

              Connect

            </h3>

            <div className="mt-6 flex gap-4">

  <div className="rounded-full bg-slate-800 p-3 transition hover:bg-blue-600 cursor-pointer">
    <Mail size={20} />
  </div>

</div>

            <div className="mt-10">

              <p className="text-slate-400">

                Email

              </p>

              <p className="mt-2">

                support@healthtwin.ai

              </p>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-slate-800 pt-8 md:flex-row">

          <p className="text-slate-500">

            © 2026 HealthTwin AI. All Rights Reserved.

          </p>

          <p className="text-slate-500">

            Built with ❤️ using React, Node.js, AI & Machine Learning

          </p>

        </div>

      </div>

    </footer>
  );
}