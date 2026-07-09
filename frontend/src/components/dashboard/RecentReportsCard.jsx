import { Clock3, FileText } from "lucide-react";
import GlassPanel from "../ui/GlassPanel";

export default function RecentReportsCard({ reports }) {
  return (
    <GlassPanel className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">Recent reports</p>
          <h3 className="text-xl font-semibold text-slate-900">Latest uploads</h3>
        </div>
        <div className="rounded-2xl bg-slate-100 p-2 text-slate-600">
          <FileText className="h-5 w-5" />
        </div>
      </div>
      <div className="space-y-3">
        {reports.map((report) => (
          <div key={report.title} className="flex items-center justify-between rounded-2xl border border-slate-100 bg-slate-50/80 px-3 py-3">
            <div>
              <p className="font-medium text-slate-800">{report.title}</p>
              <p className="mt-1 flex items-center gap-2 text-sm text-slate-500">
                <Clock3 className="h-4 w-4" />
                {report.date}
              </p>
            </div>
            <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
              {report.status}
            </span>
          </div>
        ))}
      </div>
    </GlassPanel>
  );
}
