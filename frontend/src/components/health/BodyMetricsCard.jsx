import { ArrowUpRight } from "lucide-react";
import GlassPanel from "../ui/GlassPanel";

export default function BodyMetricsCard({ metric }) {
  return (
    <GlassPanel hover className="space-y-3">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-slate-500">{metric.label}</p>
        <div className="rounded-full bg-blue-50 p-2 text-blue-600">
          <ArrowUpRight className="h-4 w-4" />
        </div>
      </div>
      <p className="text-2xl font-semibold text-slate-900">{metric.value}</p>
      <p className="text-sm text-emerald-600">{metric.change}</p>
    </GlassPanel>
  );
}
