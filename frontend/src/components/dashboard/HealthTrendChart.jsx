import { LineChart, Line, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from "recharts";
import GlassPanel from "../ui/GlassPanel";

export default function HealthTrendChart({ data }) {
  return (
    <GlassPanel className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">Health trend</p>
          <h3 className="text-xl font-semibold text-slate-900">7-day overview</h3>
        </div>
        <span className="rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700">
          Improving
        </span>
      </div>
      <div className="h-56">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid stroke="#e2e8f0" strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="day" tickLine={false} axisLine={false} tick={{ fill: "#64748b", fontSize: 12 }} />
            <YAxis domain={[60, 100]} tickLine={false} axisLine={false} tick={{ fill: "#64748b", fontSize: 12 }} />
            <Tooltip />
            <Line type="monotone" dataKey="score" name="Wellness score" stroke="#2563eb" strokeWidth={3} dot={{ r: 4, fill: "#2563eb" }} activeDot={{ r: 6 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </GlassPanel>
  );
}
