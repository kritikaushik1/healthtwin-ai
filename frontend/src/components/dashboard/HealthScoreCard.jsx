import { TrendingUp } from "lucide-react";
import GlassPanel from "../ui/GlassPanel";

export default function HealthScoreCard({ score, trend, focus }) {
  return (
    <GlassPanel className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">Core score</p>
          <h3 className="text-3xl font-semibold text-slate-900">{score}</h3>
        </div>
        <div className="rounded-2xl bg-blue-50 p-3 text-blue-600">
          <TrendingUp className="h-5 w-5" />
        </div>
      </div>
      <div className="h-2 rounded-full bg-slate-100">
        <div className="h-2 w-[88%] rounded-full bg-gradient-to-r from-blue-600 to-cyan-400" />
      </div>
      <div className="flex items-center justify-between text-sm text-slate-500">
        <span>{trend}</span>
        <span className="rounded-full bg-blue-50 px-3 py-1 font-medium text-blue-700">{focus}</span>
      </div>
    </GlassPanel>
  );
}
