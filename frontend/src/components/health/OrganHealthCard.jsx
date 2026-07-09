import { CircleCheckBig } from "lucide-react";
import GlassPanel from "../ui/GlassPanel";

export default function OrganHealthCard({ organ }) {
  return (
    <GlassPanel hover className="space-y-3">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">Organ health</p>
          <h4 className="text-lg font-semibold text-slate-900">{organ.name}</h4>
        </div>
        <div className="rounded-full bg-emerald-50 p-2 text-emerald-600">
          <CircleCheckBig className="h-4 w-4" />
        </div>
      </div>
      <p className="text-sm text-slate-600">{organ.detail}</p>
      <div className="flex items-center justify-between text-sm text-slate-500">
        <span>{organ.status}</span>
        <span className="font-semibold text-blue-600">{organ.score}/100</span>
      </div>
    </GlassPanel>
  );
}
