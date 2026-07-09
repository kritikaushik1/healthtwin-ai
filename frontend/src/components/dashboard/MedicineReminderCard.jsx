import { BellRing } from "lucide-react";
import GlassPanel from "../ui/GlassPanel";

export default function MedicineReminderCard({ reminders }) {
  return (
    <GlassPanel className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">Medicine reminders</p>
          <h3 className="text-xl font-semibold text-slate-900">Today’s schedule</h3>
        </div>
        <div className="rounded-2xl bg-amber-50 p-2 text-amber-600">
          <BellRing className="h-5 w-5" />
        </div>
      </div>
      <div className="space-y-3">
        {reminders.map((item) => (
          <div key={item.name} className="flex items-center justify-between rounded-2xl border border-slate-100 bg-slate-50/80 px-3 py-3">
            <div>
              <p className="font-medium text-slate-800">{item.name}</p>
              <p className="text-sm text-slate-500">{item.time}</p>
            </div>
            <span className={`rounded-full px-3 py-1 text-sm font-medium ${item.status === "Taken" ? "bg-emerald-100 text-emerald-700" : "bg-slate-200 text-slate-700"}`}>
              {item.status}
            </span>
          </div>
        ))}
      </div>
    </GlassPanel>
  );
}
