import { HeartPulse } from "lucide-react";
import GlassPanel from "../ui/GlassPanel";

export default function BodyVisualization() {
  return (
    <GlassPanel className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">Body overview</p>
          <h3 className="text-xl font-semibold text-slate-900">Human body visualization</h3>
        </div>
        <div className="rounded-2xl bg-emerald-50 p-3 text-emerald-600">
          <HeartPulse className="h-5 w-5" />
        </div>
      </div>
      <div className="rounded-[28px] border border-slate-100 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.16),_transparent_50%)] p-6">
        <div className="mx-auto flex max-w-sm items-center justify-center rounded-full border border-blue-100 bg-white/80 p-8 shadow-inner">
          <div className="relative h-56 w-44 rounded-[999px] border-[10px] border-blue-200 bg-gradient-to-b from-blue-50 to-cyan-50">
            <div className="absolute left-1/2 top-6 h-12 w-12 -translate-x-1/2 rounded-full border-4 border-blue-300 bg-white" />
            <div className="absolute left-1/2 top-20 h-20 w-20 -translate-x-1/2 rounded-[999px] border-4 border-blue-300 bg-blue-100/80" />
            <div className="absolute left-1/2 top-40 h-24 w-24 -translate-x-1/2 rounded-[999px] border-4 border-blue-300 bg-white/70" />
            <div className="absolute left-1/2 top-56 h-24 w-16 -translate-x-1/2 rounded-full border-4 border-blue-300 bg-blue-100/70" />
            <div className="absolute left-1/2 top-72 h-20 w-24 -translate-x-1/2 rounded-b-[999px] border-4 border-blue-300 bg-white/70" />
          </div>
        </div>
      </div>
    </GlassPanel>
  );
}
