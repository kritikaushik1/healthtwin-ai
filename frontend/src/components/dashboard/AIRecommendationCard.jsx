import { Sparkles } from "lucide-react";
import GlassPanel from "../ui/GlassPanel";

export default function AIRecommendationCard({ recommendations }) {
  return (
    <GlassPanel className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">AI recommendations</p>
          <h3 className="text-xl font-semibold text-slate-900">Smart suggestions</h3>
        </div>
        <div className="rounded-2xl bg-blue-50 p-2 text-blue-600">
          <Sparkles className="h-5 w-5" />
        </div>
      </div>
      <div className="space-y-3">
        {recommendations.map((item) => (
          <div key={item.title} className="rounded-2xl border border-blue-100 bg-blue-50/70 p-3">
            <p className="font-semibold text-slate-900">{item.title}</p>
            <p className="mt-1 text-sm text-slate-600">{item.detail}</p>
          </div>
        ))}
      </div>
    </GlassPanel>
  );
}
