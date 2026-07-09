import { ArrowUpRight, Sparkles } from "lucide-react";
import GlassPanel from "../ui/GlassPanel";

export default function WelcomeCard({ name, headline, subtext, score }) {
  return (
    <GlassPanel hover className="overflow-hidden bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500 text-white">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-sm backdrop-blur">
            <Sparkles className="h-4 w-4" />
            Today’s wellness snapshot
          </div>
          <h2 className="mt-4 text-2xl font-semibold">{headline}</h2>
          <p className="mt-2 text-sm text-blue-50">{subtext}</p>
        </div>
        <div className="rounded-3xl border border-white/20 bg-white/10 p-4 backdrop-blur">
          <p className="text-sm text-blue-100">Health score</p>
          <div className="mt-2 flex items-end gap-2">
            <span className="text-4xl font-semibold">{score}</span>
            <span className="text-sm text-blue-100">/100</span>
          </div>
          <div className="mt-3 inline-flex items-center gap-1 text-sm text-blue-100">
            Trending up <ArrowUpRight className="h-4 w-4" />
          </div>
        </div>
      </div>
    </GlassPanel>
  );
}
