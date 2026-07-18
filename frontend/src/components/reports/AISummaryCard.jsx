import { BrainCircuit } from "lucide-react";
import GlassPanel from "../ui/GlassPanel";

export default function AISummaryCard({ summary }) {
  return (
    <GlassPanel className="space-y-4">
      <div className="flex items-center gap-3">
        <div className="rounded-2xl bg-violet-50 p-3 text-violet-600">
          <BrainCircuit className="h-5 w-5" />
        </div>
        <div>
          <p className="text-sm font-medium text-slate-500">AI summary</p>
          <h3 className="text-xl font-semibold text-slate-900">{summary.title}</h3>
        </div>
      </div>
      <p className="text-sm leading-6 text-slate-600">{summary.text}</p>
      <div className="space-y-2">
        {summary.highlights.map((item) => (
          <div key={item} className="rounded-2xl border border-slate-100 bg-slate-50/80 px-3 py-2 text-sm text-slate-700">
            {item}
          </div>
        ))}
      </div>
    </GlassPanel>
  );
}
